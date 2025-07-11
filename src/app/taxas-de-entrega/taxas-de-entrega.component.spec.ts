import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxasDeEntregaComponent } from './taxas-de-entrega.component';

describe('TaxasDeEntregaComponent', () => {
  let component: TaxasDeEntregaComponent;
  let fixture: ComponentFixture<TaxasDeEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxasDeEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxasDeEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
