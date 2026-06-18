import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VariantService } from '../shared/variant.service';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private variants: VariantService) {}

  remix(): void {
    this.variants.regenerate();
  }

  links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  scrolled = false;
  menuOpen = false;
  activeId = 'home';

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.onScroll();
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            this.activeId = entry.target.id;
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    this.links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) {
        this.observer?.observe(el);
      }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 24;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
