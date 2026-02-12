import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarathComponent } from './sarath.component';

describe('SarathComponent', () => {
  let component: SarathComponent;
  let fixture: ComponentFixture<SarathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
