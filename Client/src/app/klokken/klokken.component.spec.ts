import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlokkenComponent } from './klokken.component';

describe('KlokkenComponent', () => {
  let component: KlokkenComponent;
  let fixture: ComponentFixture<KlokkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlokkenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KlokkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
