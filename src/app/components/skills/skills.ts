import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAws, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import {
  IconDefinition,
  faPlug,
  faRightLeft,
  faFlask,
  faVialCircleCheck,
  faUsers,
  faUserGroup,
  faDice,
  faTableList,
  faMicrochip,
  faNetworkWired,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

interface Skill {
  name: string;
  logo?: string;
  icon?: IconDefinition;
}

interface SkillCategory {
  title: string;
  preview: Skill[];
  more: Skill[];
}

const LOGO = (slug: string) => `img/skills/${slug}.svg`;

@Component({
  selector: 'app-skills',
  imports: [FontAwesomeModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      title: 'Languages',
      preview: [
        { name: 'R', logo: LOGO('r') },
        { name: 'Python', logo: LOGO('python') },
        { name: 'JavaScript / TypeScript', logo: LOGO('typescript') },
      ],
      more: [
        { name: 'Rust', logo: LOGO('rust') },
        { name: 'PHP', logo: LOGO('php') },
      ],
    },
    {
      title: 'Stats, Maths, & Data',
      preview: [
        { name: 'tidyverse / ggplot2', logo: LOGO('tidyverse') },
        { name: 'pandas / NumPy', logo: LOGO('pandas') },
        { name: 'Stata', logo: LOGO('stata') },
      ],
      more: [
        { name: 'MATLAB', logo: LOGO('matlab') },
        { name: 'Mathematica', logo: LOGO('wolframmathematica') },
        { name: 'Stan / brms', icon: faDice },
        { name: 'Polars', logo: LOGO('polars') },
        { name: 'data.table', icon: faTableList },
        { name: 'Apache Arrow', logo: LOGO('apachearrow') },
        { name: 'Jupyter', logo: LOGO('jupyter') },
        { name: 'Shiny', logo: LOGO('posit') },
        { name: 'D3.js', logo: LOGO('d3') },
      ],
    },
    {
      title: 'Machine Learning & AI',
      preview: [
        { name: 'PyTorch', logo: LOGO('pytorch') },
        { name: 'scikit-learn', logo: LOGO('scikitlearn') },
      ],
      more: [
        { name: 'Hugging Face', logo: LOGO('huggingface') },
        { name: 'OpenAI / Anthropic API', logo: LOGO('anthropic') },
        { name: 'LangChain / LlamaIndex', logo: LOGO('langchain') },
        { name: 'Ollama', logo: LOGO('ollama') },
        { name: 'llama.cpp', icon: faMicrochip },
      ],
    },
    {
      title: 'Experiments & Surveys',
      preview: [
        { name: 'oTree', icon: faFlask },
        { name: 'Qualtrics', logo: LOGO('qualtrics') },
      ],
      more: [
        { name: 'z-Tree', icon: faVialCircleCheck },
        { name: 'Prolific', icon: faUsers },
        { name: 'Amazon MTurk', icon: faUserGroup },
      ],
    },
    {
      title: 'Web & APIs',
      preview: [
        { name: 'HTML & CSS', logo: LOGO('html5') },
        { name: 'FastAPI', logo: LOGO('fastapi') },
      ],
      more: [
        { name: 'SCSS', logo: LOGO('sass') },
        { name: 'Angular', logo: LOGO('angular') },
        { name: 'Django', logo: LOGO('django') },
        { name: 'REST / HTTP APIs', icon: faPlug },
        { name: 'WebSockets', icon: faRightLeft },
      ],
    },
    {
      title: 'Databases',
      preview: [
        { name: 'PostgreSQL', logo: LOGO('postgresql') },
        { name: 'DuckDB', logo: LOGO('duckdb') },
      ],
      more: [
        { name: 'MySQL', logo: LOGO('mysql') },
        { name: 'SQL Server', icon: faDatabase },
        { name: 'SQLite', logo: LOGO('sqlite') },
      ],
    },
    {
      title: 'Tooling & Infrastructure',
      preview: [
        { name: 'AWS', icon: faAws },
        { name: 'Azure', icon: faMicrosoft },
        { name: 'HPC / SLURM', icon: faNetworkWired },
      ],
      more: [
        { name: 'Git / GitHub', logo: LOGO('github') },
        { name: 'GitHub Actions', logo: LOGO('githubactions') },
        { name: 'Docker', logo: LOGO('docker') },
        { name: 'Cloudflare', logo: LOGO('cloudflare') },
        { name: 'Nginx', logo: LOGO('nginx') },
        { name: 'Linux', logo: LOGO('linux') },
        { name: 'Bash / Zsh', logo: LOGO('gnubash') },
        { name: 'tmux', logo: LOGO('tmux') },
        { name: 'LaTeX', logo: LOGO('latex') },
        { name: 'Quarto', logo: LOGO('quarto') },
      ],
    },
  ];
}
