import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-branch-selector",
  templateUrl: "./branch-selector.component.html",
  styleUrls: ["./branch-selector.component.scss"]
})
export class BranchSelectorComponent implements OnInit {
  @Input() branches: any[] = [];
  @Input() repoName: string;

  @Output() branchSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendBranch(branch: string) {
    this.branchSelected.emit(branch);
  }
}
