import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JslibsComponent } from './jslibs.component';

describe('JslibsComponent', () => {
  let component: JslibsComponent;
  let fixture: ComponentFixture<JslibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JslibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JslibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
