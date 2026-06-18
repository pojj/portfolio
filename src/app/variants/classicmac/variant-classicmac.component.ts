import { Component } from '@angular/core';
import { VariantService } from '../../shared/variant.service';
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS } from '../../shared/portfolio.data';

type CmWindow = 'about' | 'exp' | 'work' | 'skills' | 'contact';

@Component({
  selector: 'app-variant-classicmac',
  templateUrl: './variant-classicmac.component.html',
  styleUrls: ['./variant-classicmac.component.css'],
})
export class VariantClassicmacComponent {
  p = PROFILE;
  exp = EXPERIENCE;
  projects = PROJECTS;
  skills = SKILLS;

  /** Bottom → top stacking order; last item is the active window. */
  private windowStack: CmWindow[] = ['contact', 'skills', 'work', 'exp', 'about'];

  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }

  focusWindow(id: CmWindow): void {
    const idx = this.windowStack.indexOf(id);
    if (idx === -1) {
      return;
    }
    this.windowStack.splice(idx, 1);
    this.windowStack.push(id);
  }

  zIndex(id: CmWindow): number {
    return 10 + this.windowStack.indexOf(id);
  }

  isActive(id: CmWindow): boolean {
    return this.windowStack[this.windowStack.length - 1] === id;
  }
}
