import { Anime } from 'src/app/core/model/anime';
import { AnimeSelecionadosService } from './../../../core/anime-selecionados.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-minha-lista',
  templateUrl: './minha-lista.component.html',
  styleUrls: ['./minha-lista.component.scss'],
  providers:[MessageService, ConfirmationService]
})
export class MinhaListaComponent implements OnInit {

  constructor(private AnimeSelecionadosService: AnimeSelecionadosService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  animes!: Anime[]

  animeSelecionado?: Anime

  anime!: Anime

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.AnimeSelecionadosService.getAll().subscribe(animes => this.animes = animes)
  }

  selecionarAnime(a: Anime): void {
    this.animeSelecionado = a;
  }
  

  delete(anime: Anime): void {
    this.confirmationService.confirm({
      message: 'Você realmente quer deletar da sua lista?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.AnimeSelecionadosService.delete(anime.id).subscribe(() => {
          this.animes = this.animes.filter(a => a.id != anime.id);
          this.msg()
      })},
      reject: () => {
        this.msg2()
    }
   
    })
  }
  
  msg() {
    this.messageService.add({severity:'success', summary:'Deu bom!', detail:'Anime deletado com sucesso!'});
  }

  msg2() {
    this.messageService.add({severity:'error', summary:'F', detail:'Anime não foi deletado'});
  }



}
