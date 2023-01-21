import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfessionComponent } from './add-confession.component';

describe('AddConfessionComponent', () => {
  let component: AddConfessionComponent;
  let fixture: ComponentFixture<AddConfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConfessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
