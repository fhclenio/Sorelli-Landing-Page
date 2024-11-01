import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMelhorComponent } from './amelhor.component';

describe('AMelhorComponent', () => {
  let component: AMelhorComponent;
  let fixture: ComponentFixture<AMelhorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AMelhorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMelhorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
