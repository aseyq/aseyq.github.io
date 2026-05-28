import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-expertise-venn',
  imports: [],
  templateUrl: './expertise-venn.html',
  styleUrl: './expertise-venn.scss',
})
export class ExpertiseVenn {
  activeDomain = signal<
    'default' | 'behavioralEconomics' | 'causalInference' | 'aiMlDataScience' | 'softwareEngineering'
  >('default');

  domainDescriptions: Record<
    'default' | 'behavioralEconomics' | 'causalInference' | 'aiMlDataScience' | 'softwareEngineering',
    string
  > = {
    default: 'Hover over a circle to see how each domain contributes to my work.',
    behavioralEconomics:
      'Behavioral economics grounds my research questions in how people actually make decisions under social and strategic contexts.',
    causalInference:
      'Causal inference helps identify what interventions and mechanisms drive observed outcomes, beyond simple correlations.',
    aiMlDataScience:
      'AI/ML and data science provide scalable modeling, prediction, and pattern-discovery tools for rich experimental and observational data.',
    softwareEngineering:
      'Software engineering turns methods into robust, reusable tools and interactive systems that researchers and teams can rely on.',
  };

  setActiveDomain(domain: 'behavioralEconomics' | 'causalInference' | 'aiMlDataScience' | 'softwareEngineering') {
    this.activeDomain.set(domain);
  }

  clearActiveDomain() {
    this.activeDomain.set('default');
  }
}
