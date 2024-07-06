import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustsubjectComponent } from './justsubject.component';

describe('JustsubjectComponent', () => {
  let component: JustsubjectComponent;
  let fixture: ComponentFixture<JustsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustsubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
