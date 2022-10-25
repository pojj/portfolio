import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contactForm = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.required,
      ])
    ),
    subject: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get body() {
    return this.contactForm.get('body');
  }
}
