import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  chapters = [
    { number: 1, english_title: "Arjuna's Dilemma" },
    { number: 2, english_title: "Transcendental Knowledge" },
    // ... Continue for all 18 chapters
  ];

}
