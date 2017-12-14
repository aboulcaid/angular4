import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderRow } from '../order-row.model';;
import {Utils} from '../utils'


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  @Input() rows:OrderRow[];
  @Output() remove = new EventEmitter<OrderRow>();
  constructor() { }

  ngOnInit() {
    
  }

  totalTtc(){
    return this.rows && this.rows
    .map(row => row.ttc())
    .reduce(Utils.total,0);
  }
}
