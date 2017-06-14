import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.sass']
})
export class ModelViewComponent {
   @Input()  brandName : String;
   @Input()  model : Object;
}
