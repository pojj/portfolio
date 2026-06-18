import { Component } from '@angular/core';
import { VariantService } from './shared/variant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public variants: VariantService) {}
}
