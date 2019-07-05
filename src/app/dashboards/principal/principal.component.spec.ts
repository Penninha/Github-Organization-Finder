import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CommitsTableComponent } from "./../../components/commits-table/commits-table.component";
import { BranchSelectorComponent } from "./../../components/branch-selector/branch-selector.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule
} from "@angular/material";
import { CommitsDashComponent } from "./../commits-dash/commits-dash.component";
import { ContentTableComponent } from "./../../components/content-table/content-table.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrincipalComponent } from "./principal.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { OrganizationSearchComponent } from "src/app/components/organization-search/organization-search.component";
import { NotFoundComponent } from "src/app/errors/not-found/not-found.component";

describe("PrincipalComponent", () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PrincipalComponent,
        HeaderComponent,
        OrganizationSearchComponent,
        NotFoundComponent,
        ContentTableComponent,
        CommitsDashComponent,
        BranchSelectorComponent,
        CommitsTableComponent
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
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
