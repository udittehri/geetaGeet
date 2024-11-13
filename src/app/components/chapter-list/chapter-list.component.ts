import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CatFactComponent } from "../cat-fact/cat-fact.component";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-chapter-list',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CatFactComponent],
  templateUrl: './chapter-list.component.html',
  styleUrl: './chapter-list.component.css'
})
export class ChapterListComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1,rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 3, color: 'lightpink'},
    // {text: 'Three', cols: 2, rows: 3, color: 'lightpink'},
    // {text: 'Three', cols: 2, rows: 3, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
