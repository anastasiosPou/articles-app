import { Component, inject, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  articlesService: ArticlesService = inject(ArticlesService);
  categoryFilterUpdate = new Subject<string>();
  userInputCategory: string = "";

  constructor() {
    /*
      When the app starts, all articles will be visible.
    */
    this.articlesService.getAllArticles()
    .then((articles: Article[]) => {
        this.articles = articles;
        this.filteredArticles = articles;
    });

    /*
      Pipe the filter the user entered into these two methods.
      First we wait 750ms for the user to stop typing. Then 
      we wait until the filter text changes. Afterwards we
      subscribe the change to hte filterArticlesby method
    */
    this.categoryFilterUpdate.pipe(
      debounceTime(750),
      distinctUntilChanged()
    )
    .subscribe(value => {this.filterArticlesBy(value)});
  }

  /*
    filterArticlesBy(category) filters the articles based on the category which
    could either be [sports, news, justice, environment, tech].
  */
  filterArticlesBy(category: string) {
    console.log('here')
    /*
    If we've provided an invalid category we should set the filtered article arrayt to
    the articles array 
    */
    if (!category) {this.filteredArticles = this.articles;}

    const categoryRegex = new RegExp(`${category.toLocaleLowerCase()}`);
    this.filteredArticles = this.articles.filter((article: Article) => {
      return categoryRegex.test(article?.category.toLocaleLowerCase());
    });

    /*
    In case the category we used didn't return any results(because we haven't given a valid category)
    we should set the filtered article array again to the article array.
    */
    if (this.filteredArticles.length === 0) {
      this.filteredArticles = this.articles;
    }
  }
}
