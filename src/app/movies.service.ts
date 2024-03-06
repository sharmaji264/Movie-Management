import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}
  servers = [
    {
      title: 'Sholay',
      description: 'Production',
      poster:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdPNiHkvCCo2Y5TDcLRD74MS9wUzW_zPukshPjDwMljO7sy_uchQx75L-qi6_htTViF_n3',
      trailers: 'gg',
    },
    {
      title: 'Kantara',
      description: 'Production',
      poster: 'stable',
      trailers: 'gg',
    },
    {
      title: 'Kabir Singh',
      description: 'Production',
      poster: 'stable',
      trailers: 'gg',
    },
  ];

  timings = [
    { id: 1, time: '14:00' },
    { id: 2, time: '16:00' },
    { id: 3, time: '18:00' },
    { id: 4, time: '20:00' },
  ];

  index: number;
  state: boolean;

  addAccount(
    title: string,
    description: string,
    poster: string,
    trailers: string
  ) {
    if (
      title === '' ||
      description === '' ||
      poster === '' ||
      trailers === ''
    ) {
      alert('Please enter all fields');
      return;
    }
    this.servers.push({
      title: title,
      description: description,
      poster: poster,
      trailers: trailers,
    });
    alert('User Added');
  }

  updateTask(
    title: string,
    description: string,
    poster: string,
    trailers: string
  ) {
    if (
      title === '' ||
      description === '' ||
      poster === '' ||
      trailers === ''
    ) {
      alert('Please enter all fields');
      return;
    }
    console.log(this.index);
    this.servers[this.index].title = title;
    this.servers[this.index].description = description;
    this.servers[this.index].trailers = trailers;
    this.servers[this.index].poster = poster;
  }

  delete(index: number) {
    this.servers.splice(index, 1);
  }
  giveIdx(idx: number) {
    this.index = idx;
    console.log(this.index);
  }
  getState(state: boolean) {
    this.state = state;
  }
}
