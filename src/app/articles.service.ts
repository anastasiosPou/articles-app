import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseURL = "http://localhost:3000/articles";

  constructor() { }

  /* getAllArticles fetches all the articles at the start of the app */
  async getAllArticles(): Promise<Article[]> {
    const data = await fetch(this.baseURL);
    return data.json() ?? [];
  }

  /*
   getArticleBy(id:) fetches only the selected article by id when we
   press the Learn more on any article.
  */

  async getArticleBy(id: Number): Promise<Article | undefined> {
    const data = await fetch(`${this.baseURL}/${id}`);
    return await data.json() ?? {};
  }
}
