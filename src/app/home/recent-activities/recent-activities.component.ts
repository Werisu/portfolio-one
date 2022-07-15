import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {

  public activities: any;
  page = 1;
  pageSize = 4;
  collectionSize:any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    this.githubService.getEvents().subscribe({
      next: value => {
        let pushOnlyList = [];

        for (const key in value) {
          if (value[key].type == 'PushEvent') {
            pushOnlyList.push(value[key]);
          }
        }

        this.activities = pushOnlyList.map(e => {

          return {...e, count: 1+1};
        });
        this.collectionSize = pushOnlyList.length;

        console.log(this.activities);
      },
      error: e => console.log
    })
  }

  refreshCountries() {
    this.activities = this.activities
      .map((country:any, i:any) => {
        console.log({id: i + 1, ...country});

        ({id: i + 1, ...country})
      })
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
