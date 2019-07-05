import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BranchSelectorComponent } from "./branch-selector.component";
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSelectModule
} from "@angular/material";

describe("BranchSelectorComponent", () => {
  let component: BranchSelectorComponent;
  let fixture: ComponentFixture<BranchSelectorComponent>;
  let branch: { name: string; value: string };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BranchSelectorComponent],
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSelectModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchSelectorComponent);
    component = fixture.componentInstance;
    branch = { name: "Test", value: "Test" };
    component.branches = [branch];
    component.incomingBranch = branch.name;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should send the selected branch", () => {
    component.branchSelected.subscribe((branchSend: string) =>
      expect(branchSend).toBe(branch.value)
    );
    component.sendBranch(branch.value);
  });
});
