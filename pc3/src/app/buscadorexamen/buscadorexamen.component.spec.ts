import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorexamenComponent } from './buscadorexamen.component';

describe('BuscadorexamenComponent', () => {
  let component: BuscadorexamenComponent;
  let fixture: ComponentFixture<BuscadorexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorexamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
