import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  showSpinner = false;

  id_cat: String = "";

  livro: Livro = {
    id: '',
    titulo:'',
    nome_autor:'',
    texto: ''
  }

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //pegar id da categoria na inicialização
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.livro.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

 findById(): void {
     this.service.findAllById(this.livro.id!).subscribe((resposta) => {
     this.livro = resposta
   })
 } 


  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

}
