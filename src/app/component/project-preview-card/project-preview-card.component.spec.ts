import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewCardComponent } from './project-preview-card.component';

describe('ProjectPreviewCardComponent', () => {
  let component: ProjectPreviewCardComponent;
  let fixture: ComponentFixture<ProjectPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
