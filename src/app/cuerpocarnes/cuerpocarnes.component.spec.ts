import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpocarnesComponent } from './cuerpocarnes.component';

describe('CuerpocarnesComponent', () => {
  let component: CuerpocarnesComponent;
  let fixture: ComponentFixture<CuerpocarnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpocarnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpocarnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
