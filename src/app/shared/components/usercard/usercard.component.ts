import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {
  @Input() user?: User;
  phoneNumberRandom ?: number = Math.floor(Math.random() * 1000000000);
  constructor() { }

  ngOnInit(): void {
  }

}
