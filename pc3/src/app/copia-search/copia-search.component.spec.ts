import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiaSearchComponent } from './copia-search.component';

describe('CopiaSearchComponent', () => {
  let component: CopiaSearchComponent;
  let fixture: ComponentFixture<CopiaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
