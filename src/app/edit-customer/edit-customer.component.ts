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
  name: string;
  email: string;
  phone: string;
  address: string;
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.customers = this.recordsService.tasks;
    // console.log(this.isAdmin);
    // this.recordsService.custum.subscribe((idx: number) => {
    //   this.index = idx;
    //   console.log(this.index);
    // });
    this.route.params.subscribe((params: any) => {
      this.index = params['id'];
    });
    // console.log(this.index);
    this.name = this.moviesService.servers[this.index].title;
    this.email = this.moviesService.servers[this.index].description;
    this.phone = this.moviesService.servers[this.index].poster;
    this.address = this.moviesService.servers[this.index].trailers;
  }
  onCreateAccount(name: string, email: string, phone: string, address: string) {
    // this.recordsService.tasks[this.index].name = name;
    // console.log(this.index, this.recordsService.tasks);
    this.moviesService.updateTask(name, email, phone, address);
    this.router.navigate(['dashboard']);
  }
}
