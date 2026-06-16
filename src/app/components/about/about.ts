import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faBluesky, faOrcid, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ExpertiseVenn } from '../projects/expertise-venn/expertise-venn';

@Component({
  selector: 'app-about',
  imports: [MatListModule, MatButtonModule, MatDividerModule, FontAwesomeModule, ExpertiseVenn],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  profiles: { icon: IconDefinition; label: string; url: string; handle: string }[] = [
    { icon: faGithub,        label: 'GitHub',         url: 'https://github.com/aseyq',                                       handle: '@aseyq' },
    { icon: faLinkedin,      label: 'LinkedIn',       url: 'https://www.linkedin.com/in/aseyq/',                             handle: '/in/aseyq' },
    { icon: faBluesky,       label: 'Bluesky',        url: 'https://bsky.app/profile/aseyq.bsky.social',                    handle: '@aseyq' },
    { icon: faGraduationCap, label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=_wKlBXsAAAAJ&hl=en',  handle: 'Ali Seyhun Saral' },
    { icon: faOrcid,         label: 'ORCID',          url: 'https://orcid.org/0000-0002-5523-5355',                          handle: '0000-0002-5523-5355' },
  ];
}
