import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-notebook',
  templateUrl: './variant-notebook.component.html',
  styleUrls: ['./variant-notebook.component.css'],
})
export class VariantNotebookComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;
  constructor(private variants: VariantService) {}
  remix(): void {
    this.variants.regenerate();
  }
}
