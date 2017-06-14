import { TestBed, async, inject } from '@angular/core/testing';
import { Http, Headers } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/RX';

import { HttpService } from "./services/http-service";

import { DropdownComponent } from './dropdown/dropdown.component';
import { ModelViewComponent } from './model-view/model-view.component';
import { AppComponent } from './app.component';
let mockBrands = [{"make":"acura","name":"Acura","is_hidden":false,"is_in_navigation":true},{"make":"ford","name":"Ford","is_hidden":false,"is_in_navigation":true}];
let mockModels = [{"model":"acura_ilx","name":"ILX","is_hidden":false,"is_in_navigation":true,"image":"http://buyersguide.caranddriver.com/media/assets/submodel/7655.jpg"},{"model":"acura_mdx","name":"MDX","is_hidden":false,"is_in_navigation":true,"image":"http://buyersguide.caranddriver.com/media/assets/submodel/7631.jpg"}];
class MockHttpService {
  public getBrands() {
    return Observable.create((o) => {
      mockBrands.map((b) => o.next(b));
    });
  };

  public getModels(brandId: string) {
    return Observable.create((o) => {
      mockModels.map((m) => o.next(m));
    });
  }
}

describe('AppComponent', () => {
  let fixture = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DropdownComponent,
        ModelViewComponent,
        AppComponent
      ],
      providers: [
        Http, { provide: HttpService, useClass: MockHttpService }
      ]
    }).compileComponents();
   fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should get the brands', async(() => {
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    fixture.detectChanges();
    expect(app.makes.length).toBe(2);
  }))

  it('should get the models', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.makes = [{name:'', make:1}];
    app.selectedBrandId(1);
    fixture.detectChanges();
    expect(app.models.length).toBe(2);
  }));

    it('should select a model', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.models = mockModels;
    app.selectedModelId('acura_ilx');
    fixture.detectChanges();
    expect(app.model).toBe(mockModels[0]);
  }));
});
