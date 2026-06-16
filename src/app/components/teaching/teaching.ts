import { Component } from '@angular/core';

export interface TeachingItem {
  title: string;
  url?: string;
  institution: string;
  year: string;
  location: string;
}

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.html',
  styleUrl: './teaching.scss',
})
export class Teaching {
  courses: TeachingItem[] = [
    { title: 'Introduction to Python & Experiments with oTree', url: 'https://github.com/aseyq/imprs',          institution: 'International Max Planck Research Schools (IMPRS) Summer School', year: '2023', location: 'Immenstaad, Germany' },
    { title: 'Games and Agents: Agent-Based Modeling',          url: 'https://github.com/aseyq/leidensim',       institution: 'Leiden University, Conflict and Cooperation Laboratory',           year: '2022', location: 'Leiden, Netherlands' },
    { title: 'Programming Experiments with oTree',              url: 'https://github.com/aseyq/cereb-otree',     institution: 'University of Erfurt',                                             year: '2021', location: 'Germany (Online)' },
    { title: 'R Programming for Mathematics',                   url: 'https://github.com/aseyq/trentomathr',     institution: 'University of Trento, Department of Economics and Management',    year: '2021', location: 'Trento, Italy' },
    { title: 'Version Control with Git (Turkish)',              url: 'https://www.dropbox.com/scl/fi/58zu30cfkdefrysigu35z/saral_git_ile_versiyon_kontrolu-2020-06-02.pdf?rlkey=4ktcjxxdomi57ev60x5k54j2t&dl=1', institution: 'Ulusal Araştırma Verileri Sempozyumu', year: '2021', location: 'Turkey (Online)' },
    { title: 'Programming Experiments with oTree',                                                               institution: 'Max Planck Institute for Research on Collective Goods',           year: '2020', location: 'Bonn, Germany' },
    { title: 'Introduction to ggplot2',                         url: 'https://github.com/seyhunsaral/jdmx-ggplot2', institution: 'Judgement and Decision Making (JDMx) Workshop',               year: '2019', location: 'Trento, Italy' },
    { title: 'z-Tree Programming',                                                                               institution: 'Max Planck Institute for Research on Collective Goods',           year: '2018', location: 'Bonn, Germany' },
    { title: 'Game Theory (T.A.)',                                                                               institution: 'Trento University',                                               year: '2017', location: 'Trento, Italy' },
    { title: 'z-Tree Programming (with Matteo Ploner)',                                                          institution: "Ca' Foscari University",                                          year: '2017', location: 'Venice, Italy' },
    { title: 'Game Theory (T.A.)',                                                                               institution: 'Istanbul Bilgi University',                                       year: '2013', location: 'Istanbul, Turkey' },
    { title: 'Advanced Microeconomics (T.A.)',                                                                   institution: 'Istanbul Bilgi University',                                       year: '2012–2013', location: 'Istanbul, Turkey' },
    { title: 'Intermediate Microeconomics (T.A.)',                                                               institution: 'Istanbul Bilgi University',                                       year: '2012–2013', location: 'Istanbul, Turkey' },
    { title: 'z-Tree Programming',                                                                               institution: 'Istanbul Bilgi University',                                       year: '2012, 2014, 2016', location: 'Istanbul, Turkey' },
  ];
}
