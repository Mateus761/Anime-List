import { AnimeSelecionadosService } from './../../../core/anime-selecionados.service';
import { Anime } from 'src/app/core/model/anime';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-animes',
  templateUrl: './update-animes.component.html',
  styleUrls: ['./update-animes.component.scss'],
  providers:[MessageService]
})
export class UpdateAnimesComponent implements OnInit {

  constructor(private animeSelecionadoService: AnimeSelecionadosService, private route: ActivatedRoute, private messageService: MessageService, private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      nota: [null, [Validators.required, Validators.max(10), Validators.min(0)]]
    })
  }

  formGroup!: FormGroup

  ngOnInit(): void {
    this.getAnime()
  }

  
  anime!: Anime

  getAnime(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null && id !== undefined){
      this.animeSelecionadoService.getById(parseInt(id)).subscribe(anime => this.anime = anime);
    }
  }

  save(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null && id !== undefined) {
      this.animeSelecionadoService.update(parseInt(id), this.anime).subscribe(() =>
      this.msg())
    }
  }

  msg() {
    this.messageService.add({severity:'success', summary:'Deu bom!', detail:'Anime alterado com sucesso!!'});
  }

}
