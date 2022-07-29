import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesAndAwardsComponent } from './certificates-and-awards.component';

describe('CertificatesAndAwardsComponent', () => {
  let component: CertificatesAndAwardsComponent;
  let fixture: ComponentFixture<CertificatesAndAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesAndAwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesAndAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
