import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LinkTooltip } from '../link-tooltip/link-tooltip';

export type PaperStatus = 'published' | 'accepted' | 'conditional-acceptance' | 'revise-and-resubmit' | 'in-submission' | 'draft' | 'data-collection' | 'design-stage' | 'dormant';

export interface Paper {
  title: string;
  coauthors: string;
  venue?: string;
  year?: number;
  month?: number;
  status?: PaperStatus;
  category: 'publication' | 'wip';
  tag?: string;
  note?: string;
  citation?: string;
  shortRef?: string;
  bibtex?: string;
  links?: {
    paper?: string | { url: string; doi?: string; cover?: string };
    supplementary?: string;
    workingPaper?: string;
  };
}

export const STATUS_LABEL: Record<PaperStatus, string> = {
  'published':          'Published',
  'accepted':           'Accepted',
  'conditional-acceptance': 'Accepted',
  'revise-and-resubmit': 'Revision requested',
  'in-submission':      'In submission',
  'draft':              'Writing paper',
  'data-collection':    'Data collection',
  'design-stage':       'Design stage',
  'dormant':            'Dormant',
};

@Component({
  selector: 'app-paper-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, LinkTooltip],
  templateUrl: './paper-card.html',
  styleUrl: './paper-card.scss',
})
export class PaperCard {
  paper = input.required<Paper>();
  readonly statusLabel = STATUS_LABEL;

  private snackBar = inject(MatSnackBar);
  private platformId = inject(PLATFORM_ID);

  paperLink(p: Paper['links']) {
    const raw = p?.paper;
    if (!raw) return null;
    return typeof raw === 'string'
      ? { url: raw, doi: undefined, cover: undefined }
      : raw;
  }

  getDoi(): string | undefined {
    return this.paperLink(this.paper().links)?.doi;
  }

  bibtexPreview(): string {
    const b = this.paper().bibtex ?? '';
    return b.length > 200 ? b.slice(0, 200) + '…' : b;
  }

  copyBibtex() {
    if (!isPlatformBrowser(this.platformId)) return;
    const bibtex = this.paper().bibtex;
    if (!bibtex) return;

    const showSuccess = () => this.snackBar.open('BibTeX copied to clipboard', 'OK', { duration: 2000 });
    const showError = () => this.snackBar.open('Could not copy BibTeX', '', { duration: 2000 });

    if (navigator.clipboard) {
      navigator.clipboard.writeText(bibtex).then(showSuccess).catch(() => this.fallbackCopy(bibtex, showSuccess, showError));
    } else {
      this.fallbackCopy(bibtex, showSuccess, showError);
    }
  }

  copyDoi() {
    if (!isPlatformBrowser(this.platformId)) return;
    const doi = this.getDoi();
    if (!doi) return;

    const showSuccess = () => this.snackBar.open('DOI copied to clipboard', 'OK', { duration: 2000 });
    const showError = () => this.snackBar.open('Could not copy DOI', '', { duration: 2000 });

    if (navigator.clipboard) {
      navigator.clipboard.writeText(doi).then(showSuccess).catch(() => this.fallbackCopy(doi, showSuccess, showError));
    } else {
      this.fallbackCopy(doi, showSuccess, showError);
    }
  }

  private fallbackCopy(text: string, onSuccess: () => void, onError: () => void) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      const ok = document.execCommand('copy');
      ok ? onSuccess() : onError();
    } catch {
      onError();
    }
    document.body.removeChild(el);
  }
}
