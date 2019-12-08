import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../models/contact-form';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactForm = new ContactForm();
  formSubmitted: boolean = false;
  formSubmitting: boolean = false;

  constructor(private requestService: RequestService) {}

  ngOnInit() {}

  public async onFormSubmit() {
    this.formSubmitting = true;
    const submitResponse = await this.requestService.post('contact_me', this.contactForm);

    this.formSubmitting = false;
    if (!submitResponse || submitResponse.error) { return; }

    this.formSubmitted = true;
  }
}
