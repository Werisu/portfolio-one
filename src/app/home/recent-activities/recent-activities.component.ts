import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {

  public activities: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize:any;
  moment = moment;
  dateNow = moment(new Date());

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(){
    let order = 1;
    this.githubService.getEvents().subscribe({
      next: value => {
        let pushOnlyList = [];

        for (const key in value) {
          if (value[key].type == 'PushEvent') {
            pushOnlyList.push(value[key]);
          }
        }

        this.activities = pushOnlyList.map(e => {

          return {...e, count: 1+1, order: order++};
        });
        this.collectionSize = pushOnlyList.length;

        console.log(this.activities);
      },
      error: e => console.log
    })
  }

}
