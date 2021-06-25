import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullcapitalComponent } from './bullcapital.component';

describe('BullcapitalComponent', () => {
  let component: BullcapitalComponent;
  let fixture: ComponentFixture<BullcapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullcapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullcapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
