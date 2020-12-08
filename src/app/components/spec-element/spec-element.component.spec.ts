import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecElementComponent } from './spec-element.component';

describe('SpecElementComponent', () => {
  let component: SpecElementComponent;
  let fixture: ComponentFixture<SpecElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
