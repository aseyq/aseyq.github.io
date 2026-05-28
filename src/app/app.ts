import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Research } from './components/research/research';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Teaching } from './components/teaching/teaching';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, About, Research, Experience, Projects, Teaching, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
