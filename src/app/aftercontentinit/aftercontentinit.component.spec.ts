import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentinitComponent } from './aftercontentinit.component';

describe('AftercontentinitComponent', () => {
  let component: AftercontentinitComponent;
  let fixture: ComponentFixture<AftercontentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftercontentinitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftercontentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
