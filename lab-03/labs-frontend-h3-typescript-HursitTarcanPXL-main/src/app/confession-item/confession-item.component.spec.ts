import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionItemComponent } from './confession-item.component';

describe('ConfessionItemComponent', () => {
  let component: ConfessionItemComponent;
  let fixture: ComponentFixture<ConfessionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfessionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfessionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
