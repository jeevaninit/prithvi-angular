import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodylalithComponent } from './bodylalith.component';

describe('BodylalithComponent', () => {
  let component: BodylalithComponent;
  let fixture: ComponentFixture<BodylalithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodylalithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodylalithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
