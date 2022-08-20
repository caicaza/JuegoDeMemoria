import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeRelaxComponent } from './mode-relax.component';

describe('ModeRelaxComponent', () => {
  let component: ModeRelaxComponent;
  let fixture: ComponentFixture<ModeRelaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeRelaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeRelaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
