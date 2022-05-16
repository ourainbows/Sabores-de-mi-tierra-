import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'http://localhost:3000/recipe';
  constructor(private htttp: HttpClient) {}

  getRecipeById(id: string): Observable<Recipe> {
    return this.htttp.get<Recipe>(`${this.apiUrl}/${id}`);
  }
}
