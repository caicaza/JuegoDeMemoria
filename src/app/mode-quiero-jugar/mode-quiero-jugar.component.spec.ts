import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeQuieroJugarComponent } from './mode-quiero-jugar.component';

describe('ModeQuieroJugarComponent', () => {
  let component: ModeQuieroJugarComponent;
  let fixture: ComponentFixture<ModeQuieroJugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeQuieroJugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeQuieroJugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
