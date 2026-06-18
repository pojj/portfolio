import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

type StartupMode = 'intro' | 'building' | 'done';

/**
 * Claude Code research-preview themed startup experience.
 *
 *  - First ever visit  → a Claude Code inspired terminal splash (pixel logo +
 *    "Press Enter to continue"), with no personal information.
 *  - Every later load (including the in-app rebuild/remix reload) → the Claude
 *    mascot GIF plays once before revealing the site.
 */
@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent implements OnInit, OnDestroy {
  private static readonly STORAGE_KEY = 'pf_intro_seen';

  private static initialMode(): StartupMode {
    try {
      return localStorage.getItem(StartupComponent.STORAGE_KEY) === '1'
        ? 'building'
        : 'intro';
    } catch {
      return 'building';
    }
  }

  mode: StartupMode = StartupComponent.initialMode();
  firstVisit = StartupComponent.initialMode() === 'intro';
  closing = false;
  crabAnimating = false;

  readonly prompt = 'build me a portfolio website';
  readonly staticCrabSrc = 'assets/clawd-first-frame.png';
  readonly animatedCrabSrc = 'assets/clawd.gif';

  get crabSrc(): string {
    return this.crabAnimating ? this.animatedCrabSrc : this.staticCrabSrc;
  }

  /** Pressing Enter on the intro splash continues, mirroring the reference. */
  @HostListener('document:keydown.enter')
  onEnter(): void {
    if (this.mode === 'intro') {
      this.build();
    }
  }

  private timers: ReturnType<typeof setTimeout>[] = [];

  ngOnInit(): void {
    document.documentElement.classList.add('pf-startup-pending');

    if (this.mode === 'building') {
      this.startBuilding();
    } else {
      this.crabAnimating = false;
      this.lockScroll(true);
    }
  }

  /**
   * Intro "Build it" button. The mascot is frozen on the first frame until the
   * user presses Build it — then the GIF starts playing in place before the
   * overlay fades to reveal the site.
   */
  build(): void {
    if (this.mode !== 'intro' || this.crabAnimating) {
      return;
    }
    try {
      localStorage.setItem(StartupComponent.STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }

    this.crabAnimating = true;
    const crabGifDuration = 3440;
    this.timers.push(setTimeout(() => this.finish(), crabGifDuration));
  }

  private startBuilding(): void {
    this.mode = 'building';
    this.lockScroll(true);
    this.crabAnimating = false;

    const crabDelay = 180;
    const crabGifDuration = 3440;

    this.timers.push(
      setTimeout(() => {
        if (this.mode === 'building') {
          this.crabAnimating = true;
        }
      }, crabDelay)
    );

    const total = crabDelay + crabGifDuration;
    this.timers.push(setTimeout(() => this.finish(), total));
  }

  /** Fade the overlay away and reveal the site (also used as "skip"). */
  finish(): void {
    if (this.mode === 'done' || this.closing) {
      return;
    }
    this.closing = true;
    this.prepareSiteReveal();
    document.documentElement.classList.add('pf-startup-revealing');

    this.timers.push(
      setTimeout(() => {
        this.mode = 'done';
        this.closing = false;
        this.lockScroll(false);
        document.documentElement.classList.remove('pf-startup-pending', 'pf-startup-revealing');
      }, 560)
    );
  }

  /** Cross-fade: show in-viewport content without scroll-reveal pop-in. */
  private prepareSiteReveal(): void {
    const viewportH = window.innerHeight;
    document.querySelectorAll('.pf-site-content .reveal').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH && rect.bottom > 0) {
        el.classList.add('is-visible');
      }
    });
  }

  private lockScroll(lock: boolean): void {
    try {
      document.documentElement.style.overflow = lock ? 'hidden' : '';
    } catch {
      /* ignore */
    }
  }

  ngOnDestroy(): void {
    this.timers.forEach((t) => clearTimeout(t));
    this.lockScroll(false);
    document.documentElement.classList.remove('pf-startup-pending', 'pf-startup-revealing');
  }
}
