import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-organization-search",
  templateUrl: "./organization-search.component.html",
  styleUrls: ["./organization-search.component.scss"]
})
export class OrganizationSearchComponent implements OnInit {
  @Output() organization = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendButton(element: HTMLInputElement) {
    this.organization.emit(element.value);
  }
}
