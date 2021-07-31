import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements AfterViewInit {

  categorias: Categoria[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
  dataSource = new MatTableDataSource<Categoria>(this.categorias);

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 
 constructor(private service : CategoriaService, private router: Router){}
 
 ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.categorias = resposta;
      console.log(this.categorias)
    })
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }
  
}
