import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoraisComponent } from './autorais.component';

describe('AutoraisComponent', () => {
  let component: AutoraisComponent;
  let fixture: ComponentFixture<AutoraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
