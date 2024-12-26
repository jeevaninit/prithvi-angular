import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlalithComponent } from './navbarlalith.component';

describe('NavbarlalithComponent', () => {
  let component: NavbarlalithComponent;
  let fixture: ComponentFixture<NavbarlalithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlalithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarlalithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
