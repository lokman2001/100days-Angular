import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoTopComponent } from './goto-top.component';

describe('GotoTopComponent', () => {
  let component: GotoTopComponent;
  let fixture: ComponentFixture<GotoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotoTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
