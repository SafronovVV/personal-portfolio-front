import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-banner',
  templateUrl: './success-banner.component.html',
  styleUrls: ['./success-banner.component.scss']
})
export class SuccessBannerComponent implements OnInit {
  @Input() message: string = '';

  ngOnInit() {}
}
