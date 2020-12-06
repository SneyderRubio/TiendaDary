import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpocontactenosComponent } from './cuerpocontactenos.component';

describe('CuerpocontactenosComponent', () => {
  let component: CuerpocontactenosComponent;
  let fixture: ComponentFixture<CuerpocontactenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpocontactenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpocontactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
