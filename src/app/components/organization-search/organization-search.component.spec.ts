import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OrganizationSearchComponent } from "./organization-search.component";
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";

describe("OrganizationSearchComponent", () => {
  let component: OrganizationSearchComponent;
  let fixture: ComponentFixture<OrganizationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSearchComponent],
      imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit the organization when click", () => {
    let htmlElement = fixture.nativeElement;
    let input = htmlElement.querySelector("input");
    let organization = "Organization test";
    input.value = organization;

    fixture.detectChanges();

    component.organization.subscribe((orgSend: string) => {
      expect(orgSend).toBe(organization);
    });
    component.sendButton(input);
  });
});
