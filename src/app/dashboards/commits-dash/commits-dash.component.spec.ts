import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NotFoundComponent } from "./../../errors/not-found/not-found.component";
import { CommitsTableComponent } from "./../../components/commits-table/commits-table.component";
import { BranchSelectorComponent } from "./../../components/branch-selector/branch-selector.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CommitsDashComponent } from "./commits-dash.component";
import {
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from "@angular/material";

describe("CommitsDashComponent", () => {
  let component: CommitsDashComponent;
  let fixture: ComponentFixture<CommitsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommitsDashComponent,
        BranchSelectorComponent,
        CommitsTableComponent,
        NotFoundComponent
      ],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatIconModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsDashComponent);
    component = fixture.componentInstance;
    let commitData = {
      author: "Test Author",
      title: "Test Title",
      date: new Date(),
      hash: "Test Hash"
    };
    let branchData = {
      name: "Test",
      valeu: "Test"
    };
    component.commitData = [commitData, commitData];
    component.branchesData = [branchData];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
