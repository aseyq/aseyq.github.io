import { Component, input } from '@angular/core';

@Component({
  selector: 'app-link-tooltip',
  imports: [],
  templateUrl: './link-tooltip.html',
  styleUrl: './link-tooltip.scss',
})
export class LinkTooltip {
  url      = input.required<string>();
  label    = input.required<string>();
  doi      = input<string>();
  cover    = input<string>();
  citation = input<string>();
  shortRef = input<string>();
  title    = input<string>();

  shortRefWithoutYear() {
    const value = this.shortRef();
    if (!value) return '';
    return value
      .replace(/\s*\(\d{4}\)/g, '')
      .replace(/\b\d{4}\b/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
}
