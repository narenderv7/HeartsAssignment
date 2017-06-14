import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelViewComponent } from './model-view.component';

describe('ModelViewComponent', () => {
  let component: ModelViewComponent;
  let fixture: ComponentFixture<ModelViewComponent>;
  let mockView = {
        name: "Ford Edge",
        image:'http://media.caranddriver.com/images/08q1/267367/2008-ford-edge-photo-190644-s-450x274.jpg'
    }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelViewComponent);
    component = fixture.componentInstance;
    component.model =mockView;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('it should to show view',()=>{
    expect(component.model).toBe(mockView)
  })

});
