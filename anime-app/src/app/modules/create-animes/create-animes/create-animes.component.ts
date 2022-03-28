import { MessageService } from 'primeng/api';
import { AnimeService } from './../../../core/anime.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/core/model/anime';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-animes',
  templateUrl: './create-animes.component.html',
  styleUrls: ['./create-animes.component.scss'],
  providers:[MessageService]
})
export class CreateAnimesComponent implements OnInit {

  formGroup!: FormGroup

  constructor(private animeService: AnimeService, private messageService: MessageService, private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.required],
      nota: [null, [Validators.required, Validators.max(10), Validators.min(0)]]
    })
  }

  ngOnInit(): void {
  }

  anime: Anime = {
    id: undefined,
    src: '',
    nome: '',
    nota: null
  }
  
  
  create(): void {
    if (!this.formGroup.valid) {
      console.log("Formulário inválido")
    } else {
        this.animeService.add(this.anime).subscribe(() =>{
        this.msg()
     })}
    

    this.anime.nome = ''
    this.anime.nota = null;
  }

  msg() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Anime criado com sucesso!!'});
}

}
