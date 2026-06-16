import { Component } from '@angular/core';
import { PaperCard } from './paper-card/paper-card';
import { publications, workInProgress } from '../../data/papers.generated';

@Component({
  selector: 'app-research',
  imports: [PaperCard],
  templateUrl: './research.html',
  styleUrl: './research.scss',
})
export class Research {
  publications = publications;
  workInProgress = workInProgress;
}
