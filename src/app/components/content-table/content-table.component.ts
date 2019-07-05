import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
  AfterViewChecked,
  Output,
  EventEmitter
} from "@angular/core";
import { MatPaginator, MatSort, MatTable } from "@angular/material";
import {
  ContentTableDataSource,
  ContentTableItem
} from "./content-table-datasource";

@Component({
  selector: "app-content-table",
  templateUrl: "./content-table.component.html",
  styleUrls: ["./content-table.component.scss"]
})
export class ContentTableComponent
  implements AfterViewInit, OnInit, AfterViewChecked {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<ContentTableItem>;
  dataSource: ContentTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  @Input("dataTable") EXAMPLE_DATA: ContentTableItem[];
  @Output("projectClick") click = new EventEmitter<string>();

  ngOnInit() {
    this.dataSource = new ContentTableDataSource(this.EXAMPLE_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.table.dataSource = this.dataSource;
  }

  emitName(name: string) {
    this.click.emit(name);
  }
}
