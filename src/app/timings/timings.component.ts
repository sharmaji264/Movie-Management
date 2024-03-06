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
  timings = [
    { id: 1, time: '14:00' },
    { id: 2, time: '16:00' },
    { id: 3, time: '18:00' },
    { id: 4, time: '20:00' },
  ];
  default = '1';
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
    this.router.navigate(['confirmation', this.index, timing - 1]);
  }
}
