import { Anime } from 'src/app/core/model/anime';
import { AnimeService } from './../../../core/anime.service';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-best-animes',
  templateUrl: './best-animes.component.html',
  styleUrls: ['./best-animes.component.scss']
})
export class BestAnimesComponent implements OnInit {

  constructor(private animeService: AnimeService) { }

  animes!: Anime[]
  
  ngOnInit(): void {
    this.getBestAnimes()
  }

 getBestAnimes(): void { 
   this.animeService.getAll().pipe(
     map(animeList => animeList.filter(a => a.nota! >= 9))
     ).subscribe(animeList => this.animes = animeList)
 }

}