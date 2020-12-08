import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecPageComponent } from './spec-page.component';

describe('SpecPageComponent', () => {
  let component: SpecPageComponent;
  let fixture: ComponentFixture<SpecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
