import { HttpClient } from '@angular/common/http';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { getAllGames } from '../fake-api';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly http: HttpClient) { }

  title = 'Board Game Hoard';
  games = this.http.get<any[]>('/api/games');
}

@Pipe({ name: 'formatRating' })
export class FormatRatingPipe implements PipeTransform {
  transform(value: number) {
    return formatRating(value);
  }
}
