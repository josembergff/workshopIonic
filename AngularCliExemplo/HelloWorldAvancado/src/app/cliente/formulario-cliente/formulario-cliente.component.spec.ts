import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioClienteComponent } from './formulario-cliente.component';

describe('FormularioClienteComponent', () => {
  let component: FormularioClienteComponent;
  let fixture: ComponentFixture<FormularioClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
