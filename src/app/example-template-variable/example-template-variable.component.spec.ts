import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTemplateVariableComponent } from './example-template-variable.component';

describe('ExampleTemplateVariableComponent', () => {
  let component: ExampleTemplateVariableComponent;
  let fixture: ComponentFixture<ExampleTemplateVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTemplateVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTemplateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
