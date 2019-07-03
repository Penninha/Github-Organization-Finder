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

  isReposLoading: boolean = false;
  btnClicked: boolean = false;
  repoName: string = null;
  orgName: string = null;
  incomingBranch: string;

  errorHandling: number = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getRepos(element: string) {
    this.btnClicked = false;
    this.errorHandling = null;
    this.repoName = null;
    this.example_data = [];
    this.isReposLoading = true;

    this.http.get(`https://api.github.com/orgs/${element}/repos`).subscribe(
      (res: any[]) => {
        res.forEach(element => {
          this.example_data.push({ id: element.id, name: element.name });
        });

        this.orgName = element;
        this.btnClicked = true;
        this.isReposLoading = false;
      },
      (err: any) => {
        this.isReposLoading = false;
        this.errorHandling = err.status;
      }
    );
  }

  getProjectName(project: string) {
    this.errorHandling = null;
    this.btnClicked = false;
    this.commits_data = [];
    this.branches_data = [];
    this.isReposLoading = true;

    let params = new HttpParams();
    let hasMaster: boolean = false;

    this.http
      .get(`https://api.github.com/repos/${this.orgName}/${project}/branches`)
      .subscribe(
        (res: any[]) => {
          res.forEach(element => {
            this.branches_data.push({
              name: element.name,
              value: element.name
            });

            if (element.name == "master") {
              hasMaster = true;
            }
          });

          if (hasMaster) {
            this.incomingBranch = "master";
          } else {
            this.incomingBranch = this.branches_data[0].name;
          }

          params = params.append("sha", this.incomingBranch);

          this.http
            .get(
              `https://api.github.com/repos/${this.orgName}/${project}/commits`,
              {
                params: params
              }
            )
            .subscribe(
              (res: any[]) => {
                res.forEach(element => {
                  let realTitle = element.commit.message.split("\n", 1);

                  this.commits_data.push({
                    author:
                      element.author == null
                        ? element.committer == null
                          ? "Unknown"
                          : element.committer.login
                        : element.author.login,
                    title: realTitle[0],
                    date: element.commit.author.date,
                    hash: element.sha
                  });
                });

                this.repoName = project;
                this.isReposLoading = false;
              },
              (err: any) => {
                this.isReposLoading = false;
                this.errorHandling = err.status;
              }
            );
        },
        (err: any) => {
          this.isReposLoading = false;
          this.errorHandling = err.status;
        }
      );
  }

  returnTables() {
    this.repoName = null;
    this.btnClicked = true;
  }
}
