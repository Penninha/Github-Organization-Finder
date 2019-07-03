import { CommitsTableItem } from "./../../components/commits-table/commits-table-datasource";
import { Component, OnInit } from "@angular/core";
import { ContentTableItem } from "../../components/content-table/content-table-datasource";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.scss"]
})
export class PrincipalComponent implements OnInit {
  example_data: ContentTableItem[] = [];
  commits_data: CommitsTableItem[] = [];
  branches_data: any[] = [];

  btnClicked: boolean = false;
  repoName: string = null;
  orgName: string = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  debugEmitter(element: string) {
    this.repoName = null;
    this.example_data = [];

    this.http
      .get(`https://api.github.com/orgs/${element}/repos`)
      .subscribe((res: any[]) => {
        res.forEach(element => {
          this.example_data.push({ id: element.id, name: element.name });
        });

        this.orgName = element;
        this.btnClicked = true;
      });
  }

  getProjectName(project: string) {
    this.btnClicked = false;
    this.commits_data = [];
    this.branches_data = [];

    let params = new HttpParams();
    params = params.append("sha", "master");

    this.http
      .get(`https://api.github.com/repos/${this.orgName}/${project}/branches`)
      .subscribe((res: any[]) => {
        res.forEach(element => {
          this.branches_data.push({ name: element.name, value: element.name });
        });

        this.http
          .get(
            `https://api.github.com/repos/${this.orgName}/${project}/commits`,
            {
              params: params
            }
          )
          .subscribe((res: any[]) => {
            res.forEach(element => {
              let realTitle = element.commit.message.split("\n", 1);

              this.commits_data.push({
                author: element.author.login,
                title: realTitle[0],
                date: element.commit.author.date,
                hash: element.sha
              });
            });

            this.repoName = project;
          });
      });
  }
}
