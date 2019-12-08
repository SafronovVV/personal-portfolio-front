import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  private skillsList: Array<any> = [
    { name: 'JavaScript', level: 85 },
    { name: 'Angular', level: 75 },
    { name: 'Ionic', level: 70 },
    { name: 'React', level: 50 },
    { name: 'Ruby (Rails)', level: 60 },
    { name: 'Databases (Postgres)', level: 50 },
    { name: 'iOS & Android development', level: 25 }
  ];
  ngOnInit() {}
}
