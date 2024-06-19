import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleID: Number
  constructor() {
    const articleID = Number(this.route.snapshot.params["id"]);
    this.articleID = articleID;
  }
}
