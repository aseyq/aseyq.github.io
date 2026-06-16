import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Research } from './components/research/research';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Teaching } from './components/teaching/teaching';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'research', component: Research },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'teaching', component: Teaching },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
