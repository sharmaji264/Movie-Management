import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-timings',
  templateUrl: './timings.component.html',
  styleUrl: './timings.component.css',
})
export class TimingsComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  index: number;
  title: string;
  poster: string;
  default = '1';
  deafultSeat = '1';
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.index = params['id'];
    });
    // console.log(this.index);
    this.title = this.moviesService.servers[this.index].title;
    this.poster = this.moviesService.servers[this.index].poster;
  }
  onSubmit() {
    let timing = this.signupForm.value.secret;
    let seats = this.signupForm.value.seats;
    this.router.navigate(['confirmation', this.index, timing - 1, seats - 1]);
  }
}
