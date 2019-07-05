import { ContentTableItem } from "./content-table-datasource";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";

import { ContentTableComponent } from "./content-table.component";

describe("ContentTableComponent", () => {
  let component: ContentTableComponent;
  let fixture: ComponentFixture<ContentTableComponent>;
  let data: ContentTableItem[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTableComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTableComponent);
    component = fixture.componentInstance;
    data = [{ id: 1234, name: "Test name" }];
    component.EXAMPLE_DATA = data;
    fixture.detectChanges();
  });

  it("should compile", () => {
    expect(component).toBeTruthy();
  });

  it("should send the title name when clicked on the name", () => {
    component.click.subscribe((testName: string) => {
      expect(testName).toBe(data[0].name);
    });
    component.emitName(data[0].name);
  });
});
