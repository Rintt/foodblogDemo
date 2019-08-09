import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Lasagna Recipe',
'This is simply a test',
'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/express_lasagne_51375_16x9.jpg',
[
new Ingredient('Meat', 1),
new Ingredient('French Fries', 20) ]), 
new Recipe('A Test Burger Recipe',
'This is simply a test',
'https://www.goodfood.com.au/content/dam/images/h/1/1/j/5/b/image.related.wideLandscape.940x529.h11w9b.png/1530167192718.jpg',
 [
 new Ingredient('Bun', 2),
 new Ingredient('Meat', 1)])];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();}
   

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);

    }

}