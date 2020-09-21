import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/types';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Output() handleClick = new EventEmitter<any>();

  disabled: boolean;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  performClick(): void {
    this.disabled = true;
    this.itemService.handleClick(this.item);
    setTimeout(() => { this.disabled = false; }, this.item.refresh * 1000);
  }
}
