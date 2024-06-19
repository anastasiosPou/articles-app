import { Component, Input } from '@angular/core';
import { Article } from '../article';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: Article
}
