import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTwoComponent } from './array-two.component';

describe('ArrayTwoComponent', () => {
  let component: ArrayTwoComponent;
  let fixture: ComponentFixture<ArrayTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
