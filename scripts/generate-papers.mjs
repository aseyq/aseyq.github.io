import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const papersDir = join(__dirname, '../src/data/papers');
const outputFile = join(__dirname, '../src/app/data/papers.generated.ts');
const outputDir = dirname(outputFile);

const STATUS_ORDER = ['accepted', 'conditional-acceptance', 'revise-and-resubmit', 'in-submission', 'draft', 'data-collection', 'design-stage', 'dormant'];

async function main() {
  const files = (await readdir(papersDir)).filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));

  const papers = await Promise.all(
    files.map(async file => {
      const content = await readFile(join(papersDir, file), 'utf8');
      return yaml.load(content);
    })
  );

  const publications = papers
    .filter(p => p.category === 'publication')
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || (b.month ?? 0) - (a.month ?? 0));

  const wip = papers
    .filter(p => p.category === 'wip')
    .sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status));

  const ts = `// AUTO-GENERATED — do not edit by hand.
// Edit files in src/data/papers/ instead, then rebuild.
import { Paper } from '../components/research/paper-card/paper-card';

export const publications: Paper[] = ${JSON.stringify(publications, null, 2)};

export const workInProgress: Paper[] = ${JSON.stringify(wip, null, 2)};
`;

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, ts, 'utf8');
  console.log(`✔ Generated papers.generated.ts (${publications.length} publications, ${wip.length} WIP)`);
}

main().catch(err => { console.error(err); process.exit(1); });
