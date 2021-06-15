import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorNuevoComponent } from './buscador-nuevo.component';

describe('BuscadorNuevoComponent', () => {
  let component: BuscadorNuevoComponent;
  let fixture: ComponentFixture<BuscadorNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
