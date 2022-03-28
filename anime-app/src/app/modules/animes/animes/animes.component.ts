import { AnimeSelecionadosService } from './../../../core/anime-selecionados.service';
import { AnimeService } from './../../../core/anime.service';
import { Anime } from './../../../core/model/anime';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError} from 'rxjs';


@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
  providers:[MessageService]
})
export class AnimesComponent implements OnInit {

  constructor(private animeService: AnimeService, private messageService: MessageService, private animeSelecionadoService: AnimeSelecionadosService) { }

  ngOnInit(): void {
    this.getAllAnimes()
  }

  animes!: Anime[]

  anime!: Anime
  
  getAllAnimes(): void {
    this.animeService.getAll().subscribe(animes => {
      this.animes = animes
    })
  }

  addToList(anime: Anime): void {
    this.animeSelecionadoService.add(anime).pipe(
      catchError(err => {
        this.msg2()
        throw err
      })
    ).subscribe(response => {
      console.log(response)
      if (response) {
        this.msg()
      }
    })
    
  }

  msg() {
    this.messageService.add({severity:'success', summary:'Deu bom!', detail:'Anime adicionado a lista!'});
  }

  msg2() {
    this.messageService.add({severity:'error', summary:'F', detail:'Anime já existe na sua lista!'});
  }
}


