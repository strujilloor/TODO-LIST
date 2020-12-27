import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() listName: EventEmitter<string>;

  constructor() {
    this.listName = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public addNewList( value: string ): void {
    this.listName.emit(value);
    value = '';
  }

}
