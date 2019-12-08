import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../models/contact-form';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactForm = new ContactForm();
  formSubmitted: boolean = false;

  ngOnInit() {}

  public onFormSubmit() {}
}
