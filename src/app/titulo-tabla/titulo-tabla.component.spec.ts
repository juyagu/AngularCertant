import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTablaComponent } from './titulo-tabla.component';

describe('TituloTablaComponent', () => {
  let component: TituloTablaComponent;
  let fixture: ComponentFixture<TituloTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
