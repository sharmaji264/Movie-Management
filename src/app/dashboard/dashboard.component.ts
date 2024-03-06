import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  customers = [];
  isAdmin: boolean;
  error = false;
  idx: number;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // console.log(this.isAdmin);
    console.log(this.movieService.state);
    this.isAdmin = this.movieService.state;
  }
  ngOnInit(): void {
    console.log('children');
    this.customers = this.movieService.servers;
  }
  onCreateAccount(name: string, email: string, phone: string, address: string) {
    this.movieService.addAccount(name, email, phone, address);
  }
  onDelete(idx: number) {
    this.error = true;
    this.idx = idx;
    this.movieService.delete(idx);
  }

  onEdit(idx: number) {
    // console.log(idx);
    // this.recordsService.custum.emit(idx);
    this.movieService.giveIdx(idx);
    this.router.navigate(['edit', idx]);
  }
  LogOut() {
    console.log('hah');
    // this.router.navigate(['']);
  }
  onHandleError() {
    this.error = false;
    // this.recordsService.delete(this.idx);
  }
  onHandleYes() {
    this.error = false;
    this.movieService.delete(this.idx);
  }
}
