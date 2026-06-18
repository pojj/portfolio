import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

@Component({
  selector: 'app-variant-pixel',
  templateUrl: './variant-pixel.component.html',
  styleUrls: ['./variant-pixel.component.css'],
})
export class VariantPixelComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }
}
