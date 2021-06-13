import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Alquiler } from '../alquiler.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  alquiler$: Observable<Alquiler> | undefined;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.alquiler$ = this.authService.getAlquilerId(id);
      console.log(this.alquiler$)
    })
    
  }

}
