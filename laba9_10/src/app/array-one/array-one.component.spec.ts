import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOneComponent } from './array-one.component';

describe('ArrayOneComponent', () => {
  let component: ArrayOneComponent;
  let fixture: ComponentFixture<ArrayOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
