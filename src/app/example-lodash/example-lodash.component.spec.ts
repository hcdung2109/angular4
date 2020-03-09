import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLodashComponent } from './example-lodash.component';

describe('ExampleLodashComponent', () => {
  let component: ExampleLodashComponent;
  let fixture: ComponentFixture<ExampleLodashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleLodashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
