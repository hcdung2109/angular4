import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleQueryParamComponent } from './example-query-param.component';

describe('ExampleQueryParamComponent', () => {
  let component: ExampleQueryParamComponent;
  let fixture: ComponentFixture<ExampleQueryParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleQueryParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
