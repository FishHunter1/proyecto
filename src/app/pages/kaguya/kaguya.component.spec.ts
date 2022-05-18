import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaguyaComponent } from './kaguya.component';

describe('KaguyaComponent', () => {
  let component: KaguyaComponent;
  let fixture: ComponentFixture<KaguyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaguyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaguyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
