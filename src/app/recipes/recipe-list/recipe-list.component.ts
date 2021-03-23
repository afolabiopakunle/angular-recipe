import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() sentRecipe = new EventEmitter()
  recipes: Recipe[] = [
    new Recipe('Japanese Omelette', 'Some are required while very few are optional. Meat of choice 2kg (beef, chicken turkey, goat meat, or assorted meat) Assorted meat is a combination of different parts of a cow 4 cups of egusi (melon) Dry fish (about two medium sizes) 1 cup of ground crayfish 1 cup of Ground Osu (optional) a good quantity of washed bitterlaef (see the video below) 3 cubes of knorr, maggi or other natural sweetener 250ml of palm oil About 2 liters of water Salt and pepper to taste. One medium size Stock fish head (okporoko) (optional) Ogiri or dawadawa or opkei (local ingredients) option','Gbemisola Opakunle', 'http://static.demilked.com/wp-content/uploads/2020/03/5e74779735304-japanese-mom-egg-food-art-1-5e73634d343e4__880.jpg'),
    new Recipe('Egusi Soup', 'Parboil the meat of your choice with all the necessary ingredients, it is advisable to parboil meat with some ingredient before adding to the main food, this improves the taste of the meat. Parboil for about ten minutes, then add water and cook till the meat is tender and the stock (water) is about to dry. Use two cubes of knorr, one spoon of kitchen glory beef spice (optional), a teaspoon of salt and half cup of sliced onions.','Afolabi Opakunle', 'https://niammy.com/img/public/1094/201703/1489227695_60444.jpg'),
  ];

  sendRecipe(sentRecipe) {
    this.sentRecipe.emit(sentRecipe)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
