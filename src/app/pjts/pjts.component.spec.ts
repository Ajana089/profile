import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjtsComponent } from './pjts.component';

describe('PjtsComponent', () => {
  let component: PjtsComponent;
  let fixture: ComponentFixture<PjtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
