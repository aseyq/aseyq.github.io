import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faBluesky, faOrcid, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly email = 'seyhunsaral@gmail.com';
  readonly emailIcon = faEnvelope;

  links: { icon: IconDefinition; label: string; url: string }[] = [
    { icon: faGithub,        label: 'GitHub',         url: 'https://github.com/aseyq' },
    { icon: faLinkedin,      label: 'LinkedIn',       url: 'https://www.linkedin.com/in/aseyq/' },
    { icon: faBluesky,       label: 'Bluesky',        url: 'https://bsky.app/profile/aseyq.bsky.social' },
    { icon: faGraduationCap, label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=_wKlBXsAAAAJ&hl=en' },
    { icon: faOrcid,         label: 'ORCID',          url: 'https://orcid.org/0000-0002-5523-5355' },
  ];
}
