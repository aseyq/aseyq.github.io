import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface Position {
  institution: string;
  logo: string;
  role: string;
  period: string;
  city: string;
}

@Component({
  selector: 'app-experience',
  imports: [MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  positions: Position[] = [
    { institution: 'CEB Secretariat, United Nations Common System',                              logo: 'img/logo-un.png',    role: 'Data and Behavioral Scientist',  period: '2024 – Present', city: 'Geneva, Switzerland' },
    { institution: 'Institute for Advanced Study in Toulouse',         logo: 'img/logo-iast.png',  role: 'Postdoctoral Researcher',         period: '2022 – 2024', city: 'Toulouse, France' },
    { institution: 'University of Bologna',                            logo: 'img/logo-unibo.png', role: 'Postdoctoral Researcher',         period: '2021 – 2022', city: 'Bologna, Italy' },
    { institution: 'Max Planck Institute for Research on Collective Goods', logo: 'img/logo-mpi.png', role: 'Lab Manager',                 period: '2018 – 2021', city: 'Bonn, Germany' },
    { institution: 'University of Trento',                             logo: 'img/logo-unitn.png', role: 'PhD in Economics and Management', period: '2014 – 2019', city: 'Trento, Italy' },
    { institution: 'Istanbul Bilgi University',                        logo: 'img/logo-bilgi.png', role: 'M.Sc. in Economics & Lab Manager', period: '2010 – 2014', city: 'Istanbul, Türkiye' },
    { institution: 'Istanbul University',                              logo: 'img/logo-iu.png',    role: 'BA in Economics',                period: '2006 – 2010', city: 'Istanbul, Türkiye' },
  ];
}
