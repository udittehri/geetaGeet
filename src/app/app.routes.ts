import { Routes } from '@angular/router';
import { VerseListComponent } from './components/verse-list/verse-list.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';

export const routes: Routes = [
    { path: 'verse/:id', component: VerseListComponent },  // Displays verses of a specific chapter
    { path: '', component: ChapterListComponent }  // Displays the chapter list by default
    ];