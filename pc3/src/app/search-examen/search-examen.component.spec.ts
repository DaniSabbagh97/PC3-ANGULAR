import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExamenComponent } from './search-examen.component';

describe('SearchExamenComponent', () => {
  let component: SearchExamenComponent;
  let fixture: ComponentFixture<SearchExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
