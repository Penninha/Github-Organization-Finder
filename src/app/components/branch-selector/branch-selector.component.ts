import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-branch-selector",
  templateUrl: "./branch-selector.component.html",
  styleUrls: ["./branch-selector.component.scss"]
})
export class BranchSelectorComponent implements OnInit {
  @Input() branches: any[] = [];
  @Input() repoName: string;
  @Input() incomingBranch: string;

  @Output() branchSelected = new EventEmitter<string>();
  @Output() backButtonPressed = new EventEmitter();

  backButtonStyle: object;
  branchSelectorStyle: object;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      } else {
        this.activateNormalLayout();
      }
    });
  }

  ngOnInit() {}

  sendBranch(branch: string) {
    this.branchSelected.emit(branch);
  }

  onBackButtonPressed() {
    this.backButtonPressed.emit();
  }

  activateHandsetLayout() {
    this.backButtonStyle = {
      "margin-left": "-5px",
      padding: "0 8px",
      "min-width": "20px"
    };
    this.branchSelectorStyle = {
      margin: "0",
      "min-width": "125px",
      "max-width": "150px",
      "font-size": "14px",
      width: "0"
    };
  }

  activateNormalLayout() {
    this.backButtonStyle = {
      "margin-left": "15px",
      padding: "0 8px",
      "min-width": "20px"
    };
    this.branchSelectorStyle = {
      margin: "0 15px",
      "min-width": "125px",
      "max-width": "200px",
      "font-size": "16px"
    };
  }
}
