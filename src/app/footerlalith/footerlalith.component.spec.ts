import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlalithComponent } from './footerlalith.component';

describe('FooterlalithComponent', () => {
  let component: FooterlalithComponent;
  let fixture: ComponentFixture<FooterlalithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterlalithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterlalithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
