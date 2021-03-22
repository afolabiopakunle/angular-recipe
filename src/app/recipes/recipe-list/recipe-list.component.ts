import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'We are still testing with descriptions here','Gbemisola Opakunle', 'http://static.demilked.com/wp-content/uploads/2020/03/5e74779735304-japanese-mom-egg-food-art-1-5e73634d343e4__880.jpg'),
    new Recipe('Egusi Soup', 'All descriptions are meant to go here and not any form of lorem ipsum. Thanks for understanding','Afolabi Opakunle', 'http://static.demilked.com/wp-content/uploads/2020/03/5e74779735304-japanese-mom-egg-food-art-1-5e73634d343e4__880.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
