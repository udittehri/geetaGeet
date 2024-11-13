import { Component, inject } from '@angular/core';
import { CatFactServiceService } from '../../services/cat-fact-service.service';

@Component({
  selector: 'app-cat-fact',
  standalone: true,
  imports: [],
  templateUrl: './cat-fact.component.html',
  styleUrl: './cat-fact.component.css'
})
export class CatFactComponent {
  catFactService = inject(CatFactServiceService)

  catFact :any = {};
  async ngOnInit() {
    this.catFact = await this.catFactService.getCatFact();
  }
  

}
