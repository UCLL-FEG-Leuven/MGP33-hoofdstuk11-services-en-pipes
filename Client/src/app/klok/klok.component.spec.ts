import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlokComponent } from './klok.component';

describe('KlokComponent', () => {
  let component: KlokComponent;
  let fixture: ComponentFixture<KlokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KlokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
