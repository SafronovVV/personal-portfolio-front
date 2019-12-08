import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private navBarOpened: boolean = false;
  private linksList: Array<any> = [
    { name: 'About me', routerLink: ['/about-me'] },
    { name: 'Contact me', routerLink: ['/contact-me'] }
  ];

  ngOnInit() {}

  private toggleNavbar(): void {
    this.navBarOpened = !this.navBarOpened;
  }
}
