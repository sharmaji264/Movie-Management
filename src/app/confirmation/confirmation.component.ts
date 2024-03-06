import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  index: number;
  title: string;
  time: string;
  poster: string;
  error = false;
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.index = params['id'];
      this.time = this.moviesService.timings[params['time']].time;
    });
    // console.log(this.index);
    this.title = this.moviesService.servers[this.index].title;
    this.poster = this.moviesService.servers[this.index].poster;
  }

  payment() {
    this.error = true;
  }

  onHandleError() {
    this.error = false;
    // this.recordsService.delete(this.idx);
  }
  onHandleYes() {
    this.error = false;
    alert('Tickets Booked');
    this.router.navigate(['home']);
  }
}
