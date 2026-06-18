import { Injectable } from '@angular/core';

export interface VariantMeta {
  id: number;
  key: string;
  name: string;
  themeClass: string;
}

/**
 * The site ships as several independent designs. A random one is chosen on every
 * page load (by the inline script in index.html, before first paint). The in-app
 * regenerate button reloads the page into a *different* design.
 */
@Injectable({ providedIn: 'root' })
export class VariantService {
  readonly variants: VariantMeta[] = [
    { id: 0, key: 'midnight', name: 'Midnight', themeClass: 'theme-midnight' },
    { id: 1, key: 'solar', name: 'Solar', themeClass: 'theme-solar' },
    { id: 2, key: 'terminal', name: 'Terminal', themeClass: 'theme-terminal' },
    { id: 3, key: 'brutalist', name: 'Brutalist', themeClass: 'theme-brutalist' },
    { id: 4, key: 'synthwave', name: 'Synthwave', themeClass: 'theme-synthwave' },
    { id: 5, key: 'swiss', name: 'Swiss', themeClass: 'theme-swiss' },
    { id: 6, key: 'bento', name: 'Bento', themeClass: 'theme-bento' },
    { id: 7, key: 'cyber', name: 'Cyber', themeClass: 'theme-cyber' },
    { id: 8, key: 'aurora', name: 'Aurora', themeClass: 'theme-aurora' },
    { id: 9, key: 'newspaper', name: 'Newspaper', themeClass: 'theme-newspaper' },
    { id: 10, key: 'blueprint', name: 'Blueprint', themeClass: 'theme-blueprint' },
    { id: 11, key: 'clay', name: 'Claymorphism', themeClass: 'theme-clay' },
    { id: 12, key: 'y2k', name: 'Y2K Aero', themeClass: 'theme-y2k' },
    { id: 13, key: 'fashion', name: 'Fashion Noir', themeClass: 'theme-fashion' },
    { id: 14, key: 'forest', name: 'Forest', themeClass: 'theme-forest' },
    { id: 15, key: 'deco', name: 'Art Deco', themeClass: 'theme-deco' },
    { id: 16, key: 'popart', name: 'Pop Art', themeClass: 'theme-popart' },
    { id: 17, key: 'glasslight', name: 'Glass Light', themeClass: 'theme-glasslight' },
    { id: 18, key: 'notebook', name: 'Notebook', themeClass: 'theme-notebook' },
    { id: 19, key: 'mononoir', name: 'Mono Noir', themeClass: 'theme-mononoir' },
  ];

  readonly current: number;

  constructor() {
    const n = this.variants.length;
    const fromWindow = (window as any).__pfVariant;
    this.current =
      typeof fromWindow === 'number' && fromWindow >= 0 && fromWindow < n
        ? fromWindow
        : Math.floor(Math.random() * n);
  }

  get currentMeta(): VariantMeta {
    return this.variants[this.current];
  }

  /** Pick a different design at random and reload into it. */
  regenerate(): void {
    const n = this.variants.length;
    let next = this.current;
    while (next === this.current) {
      next = Math.floor(Math.random() * n);
    }
    try {
      sessionStorage.setItem('pf_next', String(next));
    } catch (e) {}
    // Navigate to the bare path (dropping any ?v= override) so the forced
    // next-variant in sessionStorage is honoured on the fresh load.
    window.location.href = window.location.pathname;
  }
}
