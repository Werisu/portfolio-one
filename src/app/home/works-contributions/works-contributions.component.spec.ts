import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksContributionsComponent } from './works-contributions.component';

describe('WorksContributionsComponent', () => {
  let component: WorksContributionsComponent;
  let fixture: ComponentFixture<WorksContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
