import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articlesService: ArticlesService = inject(ArticlesService);
  article: Article | undefined;

  constructor() {
    const articleID = Number(this.route.snapshot.params["id"]);
    this.articlesService.getArticleBy(articleID)
    .then((article: Article | undefined) => {
      this.article = article;
    });
  }
}
