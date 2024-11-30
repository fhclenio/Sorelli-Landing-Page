import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeasComponent } from './campeas.component';

describe('CampeasComponent', () => {
  let component: CampeasComponent;
  let fixture: ComponentFixture<CampeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
