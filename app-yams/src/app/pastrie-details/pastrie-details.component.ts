import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pastrie, List } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {


  @Input() pastrie: Pastrie | null = null;
  ingredientsLists: string[] | null = null;
  @Output() changePreference: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    INGREDIENTS_LISTS.forEach(ingredient => {
      if (this.pastrie?.id === ingredient.id) {
        this.ingredientsLists = ingredient.list
      }
    })
  }
  onDisplay() {
    const element = document.querySelector(".desc");
    if (element) {
      element.classList.toggle("d-none");
    }
  }
  preference(id: string | null = null) {
    if (id != null) {
      this.changePreference.emit(id); 
    }
  }
}

