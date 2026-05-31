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
    default: '',
    behavioralEconomics:
      'Behavioral economics frames my questions around how people really decide — cooperation, reciprocity, social preferences, and norms in strategic and social settings.',
    causalInference:
      'I design lab and online experiments, and synthesize many of them through meta-analysis, to isolate the mechanisms behind behavior rather than settle for correlations.',
    aiMlDataScience:
      'Statistical modeling, machine learning, and agent-based and evolutionary simulations let me analyze rich experimental and large multi-lab data, predict, and uncover patterns.',
    softwareEngineering:
      'I build the tools the research runs on — experimental software, data pipelines, and dashboards that teams can reuse and rely on.',
  };

  setActiveDomain(domain: 'behavioralEconomics' | 'causalInference' | 'aiMlDataScience' | 'softwareEngineering') {
    this.activeDomain.set(domain);
  }

  clearActiveDomain() {
    this.activeDomain.set('default');
  }
}
