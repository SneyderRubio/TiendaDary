import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpogranosComponent } from './cuerpogranos.component';

describe('CuerpogranosComponent', () => {
  let component: CuerpogranosComponent;
  let fixture: ComponentFixture<CuerpogranosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpogranosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpogranosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
