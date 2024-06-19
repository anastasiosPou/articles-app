import { Component, inject} from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articles: Article[] = [];
  articlesService: ArticlesService = inject(ArticlesService);

  constructor() {
    this.articlesService.getAllArticles()
    .then((articles: Article[]) => {
        this.articles = articles;
    });
  }
}
