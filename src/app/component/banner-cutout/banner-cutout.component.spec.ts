import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCutoutComponent } from './banner-cutout.component';

describe('BannerCutoutComponent', () => {
  let component: BannerCutoutComponent;
  let fixture: ComponentFixture<BannerCutoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCutoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCutoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
