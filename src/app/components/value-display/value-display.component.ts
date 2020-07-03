import { Component, OnInit, Input } from '@angular/core';
import { Color as COLOR } from '../../types';

@Component({
  selector: 'app-value-display',
  templateUrl: './value-display.component.html',
  styleUrls: ['./value-display.component.scss']
})
export class ValueDisplayComponent implements OnInit {

  @Input() title: string;
  @Input() color: COLOR = COLOR.primary;
  @Input() icon: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.icon ? `<i class="fa fa-${this.icon}></i> ${this.title}` : this.title;
  }

  getText() {
    return this.value;
  }
}
