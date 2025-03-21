import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { ProjectModel, ExperienceModel } from '../../models';

@Component({
  selector: 'app-main',
  imports: [MatCardModule, MatListModule, MatDividerModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  projects: ProjectModel[] = []
  experiences: ExperienceModel[] = []

  async ngOnInit(): Promise<void> {
    await Promise.all([
      this.loadProjects(),
      this.loadExperiences()
    ])
  }

  async loadProjects() {
    const res = await fetch('/projects.json')
    const data = await res.json()
    this.projects = data
  }
  async loadExperiences() {
    const res = await fetch('/experiences.json')
    const data = await res.json()
    this.experiences = data
  }
}
