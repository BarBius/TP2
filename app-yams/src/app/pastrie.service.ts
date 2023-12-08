import { Injectable, Input } from '@angular/core';
import { Pastrie, List } from './pastrie';
import { PASTRIES, INGREDIENTS_LISTS } from './mock-pastries';

@Injectable({
  providedIn: 'root'
})

export class PastrieService {
  pastries: Pastrie[] = PASTRIES; 
  ingredientsLists?: List[] = INGREDIENTS_LISTS;

  constructor() { }

  getPastries(): Pastrie[] {
    return PASTRIES;
  }

  getPastrie(id:string) {
    return this.pastries.find(pastrie => pastrie.id == id);
  }

  getPastrieIngredientsList(id : string){
    return this.ingredientsLists?.find(ingredient => ingredient.id == id)?.list;
  }

  count(){
    return this.getPastries().length;
  }

  search(keyword: string): Pastrie[] {
    const lowercaseKeyword = keyword.toLowerCase();

    return PASTRIES.filter((pastrie) =>
      pastrie.name.toLowerCase().includes(lowercaseKeyword)
    );
  }
  paginate(page: number, perPage: number): Pastrie[] {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return this.pastries.slice(start, end);
  }
}
