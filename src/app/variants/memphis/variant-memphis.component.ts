import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-memphis',
  templateUrl: './variant-memphis.component.html',
  styleUrls: ['./variant-memphis.component.css'],
})
export class VariantMemphisComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;
  shapes = ['◆', '●', '▲', '■', '✦'];

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }
}
