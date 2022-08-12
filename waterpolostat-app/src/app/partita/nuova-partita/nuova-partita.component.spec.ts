import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaPartitaComponent } from './nuova-partita.component';

describe('NuovaPartitaComponent', () => {
  let component: NuovaPartitaComponent;
  let fixture: ComponentFixture<NuovaPartitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaPartitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovaPartitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
