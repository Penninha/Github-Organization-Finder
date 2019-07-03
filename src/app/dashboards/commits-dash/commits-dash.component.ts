import { HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-commits-dash",
  templateUrl: "./commits-dash.component.html",
  styleUrls: ["./commits-dash.component.scss"]
})
export class CommitsDashComponent implements OnInit {
  @Input() branchesData: any[];
  @Input() commitData: any[];
  @Input() orgName: string;
  @Input() repoName: string;

  localCommitData: any = [];
  newFetch: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.newFetch = true;
    this.localCommitData = this.commitData;
  }

  fetchNewCommitsFromOtherBranch(branch: string) {
    this.localCommitData = [];
    this.newFetch = false;

    let params = new HttpParams();
    params = params.append("sha", branch);

    this.http
      .get(
        `https://api.github.com/repos/${this.orgName}/${this.repoName}/commits`,
        {
          params: params
        }
      )
      .subscribe((res: any[]) => {
        res.forEach(element => {
          let realTitle = element.commit.message.split("\n", 1);

          this.localCommitData.push({
            author:
              element.author == null
                ? element.committer.login
                : element.author.login,
            title: realTitle[0],
            date: element.commit.author.date,
            hash: element.sha
          });
        });

        this.newFetch = true;
      });
  }
}
