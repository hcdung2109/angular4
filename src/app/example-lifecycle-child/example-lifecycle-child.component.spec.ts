import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLifecycleChildComponent } from './example-lifecycle-child.component';

describe('ExampleLifecycleChildComponent', () => {
  let component: ExampleLifecycleChildComponent;
  let fixture: ComponentFixture<ExampleLifecycleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleLifecycleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLifecycleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
