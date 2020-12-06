import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpofrutasComponent } from './cuerpofrutas.component';

describe('CuerpofrutasComponent', () => {
  let component: CuerpofrutasComponent;
  let fixture: ComponentFixture<CuerpofrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpofrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpofrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
