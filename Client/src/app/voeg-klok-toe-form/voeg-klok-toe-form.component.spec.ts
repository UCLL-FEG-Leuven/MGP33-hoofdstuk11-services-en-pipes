import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoegKlokToeFormComponent } from './voeg-klok-toe-form.component';

describe('VoegKlokToeFormComponent', () => {
  let component: VoegKlokToeFormComponent;
  let fixture: ComponentFixture<VoegKlokToeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoegKlokToeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoegKlokToeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
