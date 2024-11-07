import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CommonModule, RouterOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener el título "EjemploSignalsBasico"', () => {
    expect(component.title).toBe('EjemploSignalsBasico');
  });

  it('debe inicializar el contador en 0', () => {
    expect(component.contador()).toBe(0);
  });

  it('debe calcular dobleContador correctamente', () => {
    expect(component.dobleContador()).toBe(0);
    component.incrementar();
    expect(component.dobleContador()).toBe(2);
  });

  it('debe incrementar el contador cuando se llama a incrementar()', () => {
    component.incrementar();
    expect(component.contador()).toBe(1);
    component.incrementar();
    expect(component.contador()).toBe(2);
  });

  it('debe actualizar y registrar cambios en el contador', fakeAsync(() => {
    const consoleSpy = spyOn(console, 'log');

    // Incrementamos y esperamos el efecto
    component.incrementar();
    tick();  // Espera que el efecto ejecute
    expect(consoleSpy).toHaveBeenCalledWith('Contador ha cambiado a: 1');

    component.incrementar();
    tick();  // Espera que el efecto ejecute nuevamente
    expect(consoleSpy).toHaveBeenCalledWith('Contador ha cambiado a: 2');
  }));
});
