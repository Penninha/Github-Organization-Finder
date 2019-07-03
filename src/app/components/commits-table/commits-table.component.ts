import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input
} from "@angular/core";
import { MatPaginator, MatSort, MatTable } from "@angular/material";
import {
  CommitsTableDataSource,
  CommitsTableItem
} from "./commits-table-datasource";

@Component({
  selector: "app-commits-table",
  templateUrl: "./commits-table.component.html",
  styleUrls: ["./commits-table.component.scss"]
})
export class CommitsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<CommitsTableItem>;
  dataSource: CommitsTableDataSource;

  @Input("commitsData") data: CommitsTableItem[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["title", "author", "date", "hash"];

  ngOnInit() {
    this.dataSource = new CommitsTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
