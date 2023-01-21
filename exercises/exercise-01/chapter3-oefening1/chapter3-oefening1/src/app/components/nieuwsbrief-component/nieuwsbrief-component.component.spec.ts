import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsbriefComponentComponent } from './nieuwsbrief-component.component';

describe('NieuwsbriefComponentComponent', () => {
  let component: NieuwsbriefComponentComponent;
  let fixture: ComponentFixture<NieuwsbriefComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NieuwsbriefComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NieuwsbriefComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
