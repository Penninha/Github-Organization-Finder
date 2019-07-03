import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { OrganizationSearchComponent } from "./components/organization-search/organization-search.component";
import { ContentTableComponent } from "./components/content-table/content-table.component";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { PrincipalComponent } from "./dashboards/principal/principal.component";
import { CommitsTableComponent } from "./components/commits-table/commits-table.component";
import { BranchSelectorComponent } from "./components/branch-selector/branch-selector.component";
import { CommitsDashComponent } from "./dashboards/commits-dash/commits-dash.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrganizationSearchComponent,
    ContentTableComponent,
    PrincipalComponent,
    CommitsTableComponent,
    BranchSelectorComponent,
    CommitsDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
