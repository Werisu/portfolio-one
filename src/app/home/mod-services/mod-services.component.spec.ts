import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModServicesComponent } from './mod-services.component';

describe('ModServicesComponent', () => {
  let component: ModServicesComponent;
  let fixture: ComponentFixture<ModServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
