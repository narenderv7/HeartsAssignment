import { Component, Input , Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent {

  @Input() private name : String;
  @Input() private data : Array<any>;
  @Output() private eventNotify:EventEmitter<any> = new EventEmitter<any>() ;
  constructor() { }
  
  onSelectItem(id){
    this.eventNotify.emit(id);
  }


}
