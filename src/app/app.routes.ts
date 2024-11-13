import { Routes } from '@angular/router';
import { VerseListComponent } from './components/verse-list/verse-list.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';

export const routes: Routes = [
    { path: 'verse/:id', component: VerseListComponent },  
    { path: '', component: ChapterListComponent }  
    ];