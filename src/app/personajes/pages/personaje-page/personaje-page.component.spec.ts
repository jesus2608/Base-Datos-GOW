import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajePageComponent } from './personaje-page.component';

describe('PersonajePageComponent', () => {
  let component: PersonajePageComponent;
  let fixture: ComponentFixture<PersonajePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonajePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
