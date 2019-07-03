import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-branch-selector",
  templateUrl: "./branch-selector.component.html",
  styleUrls: ["./branch-selector.component.scss"]
})
export class BranchSelectorComponent implements OnInit {
  @Input() branches: any[] = [];

  constructor() {}

  ngOnInit() {}

  debugSelection(event) {
    console.log(event);
  }
}
