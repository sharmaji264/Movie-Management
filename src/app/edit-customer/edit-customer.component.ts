import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css',
})
export class EditCustomerComponent {
  index: number;
  title: string;
  description: string;
  poster: string;
  trailer: string;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.index = params['id'];
    });
    this.title = this.moviesService.servers[this.index].title;
    this.description = this.moviesService.servers[this.index].description;
    this.poster = this.moviesService.servers[this.index].poster;
    this.trailer = this.moviesService.servers[this.index].trailers;
  }

  onCreateAccount(
    title: string,
    description: string,
    poster: string,
    trailer: string
  ) {
    this.moviesService.updateTask(title, description, poster, trailer);
    this.router.navigate(['dashboard']);
  }
}
