import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-commits-dash",
  templateUrl: "./commits-dash.component.html",
  styleUrls: ["./commits-dash.component.scss"]
})
export class CommitsDashComponent implements OnInit {
  @Input() branchesData: any[];
  @Input() commitData: any[];

  constructor() {}

  ngOnInit() {}
}
