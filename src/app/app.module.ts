import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HttpService } from './services/http-service';
import { ModelViewComponent } from './model-view/model-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ModelViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
