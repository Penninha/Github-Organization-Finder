import { CommitsTableItem } from "./commits-table-datasource";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";

import { CommitsTableComponent } from "./commits-table.component";

describe("CommitsTableComponent", () => {
  let component: CommitsTableComponent;
  let fixture: ComponentFixture<CommitsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommitsTableComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsTableComponent);
    component = fixture.componentInstance;
    let data: CommitsTableItem[] = [
      {
        author: "Test author",
        date: new Date(),
        hash: "Test hash",
        title: "Test title"
      }
    ];
    component.data = data;
    fixture.detectChanges();
  });

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
