import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsDashComponent } from './commits-dash.component';

describe('CommitsDashComponent', () => {
  let component: CommitsDashComponent;
  let fixture: ComponentFixture<CommitsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
