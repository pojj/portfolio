import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { StartupComponent } from './startup/startup.component';
import { RevealDirective } from './shared/reveal.directive';

import { VariantMidnightComponent } from './variants/midnight/variant-midnight.component';
import { VariantSolarComponent } from './variants/solar/variant-solar.component';
import { VariantTerminalComponent } from './variants/terminal/variant-terminal.component';
import { VariantBrutalistComponent } from './variants/brutalist/variant-brutalist.component';
import { VariantSynthwaveComponent } from './variants/synthwave/variant-synthwave.component';
import { VariantSwissComponent } from './variants/swiss/variant-swiss.component';
import { VariantBentoComponent } from './variants/bento/variant-bento.component';
import { VariantCyberComponent } from './variants/cyber/variant-cyber.component';
import { VariantAuroraComponent } from './variants/aurora/variant-aurora.component';
import { VariantNewspaperComponent } from './variants/newspaper/variant-newspaper.component';
import { VariantBlueprintComponent } from './variants/blueprint/variant-blueprint.component';
import { VariantClayComponent } from './variants/clay/variant-clay.component';
import { VariantY2kComponent } from './variants/y2k/variant-y2k.component';
import { VariantFashionComponent } from './variants/fashion/variant-fashion.component';
import { VariantForestComponent } from './variants/forest/variant-forest.component';
import { VariantDecoComponent } from './variants/deco/variant-deco.component';
import { VariantPopartComponent } from './variants/popart/variant-popart.component';
import { VariantGlasslightComponent } from './variants/glasslight/variant-glasslight.component';
import { VariantNotebookComponent } from './variants/notebook/variant-notebook.component';
import { VariantMononoirComponent } from './variants/mononoir/variant-mononoir.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    StartupComponent,
    RevealDirective,
    VariantMidnightComponent,
    VariantSolarComponent,
    VariantTerminalComponent,
    VariantBrutalistComponent,
    VariantSynthwaveComponent,
    VariantSwissComponent,
    VariantBentoComponent,
    VariantCyberComponent,
    VariantAuroraComponent,
    VariantNewspaperComponent,
    VariantBlueprintComponent,
    VariantClayComponent,
    VariantY2kComponent,
    VariantFashionComponent,
    VariantForestComponent,
    VariantDecoComponent,
    VariantPopartComponent,
    VariantGlasslightComponent,
    VariantNotebookComponent,
    VariantMononoirComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
