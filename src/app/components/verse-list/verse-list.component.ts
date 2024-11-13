import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-verse-list',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './verse-list.component.html',
  styleUrl: './verse-list.component.css'
})
export class VerseListComponent {

}

