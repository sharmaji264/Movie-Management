import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  login: boolean = true;
  pass: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.login = true;
  }
  onSubmit() {
    // console.log(this.signupForm.value.email);
    // console.log(this.signupForm.value.password);
    if (this.signupForm.value.password === '') {
      // console.log(this.signupForm.value.password);
      this.pass = true;
      return;
    }
    this.login = false;
    if (this.signupForm.value.email === 'sankalp.g2002@gmail.com') {
      this.moviesService.getState(true);
      this.router.navigate(['dashboard']);
    } else {
      this.moviesService.getState(false);
      this.router.navigate(['home']);
    }
  }
}
