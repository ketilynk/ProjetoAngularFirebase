import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: ILivro[] = [
  {
    isbn: "123",
    titulo: "uma breve historia de amor",
    categoria: [
      { nome: "cientifico" },
      { nome: "romance" },
      { nome: "terror" }
    ]
  },
  {
    isbn: "124",
    titulo: "o segredo das estrelas",
    categoria: [
      { nome: "cientifico" },
      { nome: "ficcao" }
    ]
  },
  {
    isbn: "125",
    titulo: "noite sem fim",
    categoria: [
      { nome: "terror" },
      { nome: "suspense" }
    ]
  },
  {
    isbn: "126",
    titulo: "amor alem do tempo",
    categoria: [
      { nome: "romance" },
      { nome: "fantasia" }
    ]
  },
  {
    isbn: "127",
    titulo: "o ultimo experimento",
    categoria: [
      { nome: "cientifico" },
      { nome: "ficcao" }
    ]
  },
  {
    isbn: "128",
    titulo: "ecos da escuridao",
    categoria: [
      { nome: "terror" }
    ]
  },
  {
    isbn: "129",
    titulo: "caminhos do coracao",
    categoria: [
      { nome: "romance" }
    ]
  },
  {
    isbn: "130",
    titulo: "alem do horizonte",
    categoria: [
      { nome: "aventura" },
      { nome: "ficcao" }
    ]
  },
  {
    isbn: "131",
    titulo: "o codigo perdido",
    categoria: [
      { nome: "suspense" },
      { nome: "cientifico" }
    ]
  },
  {
    isbn: "132",
    titulo: "sombras na floresta",
    categoria: [
      { nome: "terror" },
      { nome: "aventura" }
    ]
  },
  {
    isbn: "133",
    titulo: "destinos cruzados",
    categoria: [
      { nome: "romance" },
      { nome: "drama" }
    ]
  },
  {
    isbn: "134",
    titulo: "o despertar da mente",
    categoria: [
      { nome: "cientifico" }
    ]
  },
  {
    isbn: "135",
    titulo: "ilha do misterio",
    categoria: [
      { nome: "aventura" },
      { nome: "suspense" }
    ]
  },
  {
    isbn: "136",
    titulo: "amor em paris",
    categoria: [
      { nome: "romance" }
    ]
  },
  {
    isbn: "137",
    titulo: "o portal sombrio",
    categoria: [
      { nome: "fantasia" },
      { nome: "terror" }
    ]
  },
  {
    isbn: "138",
    titulo: "vida artificial",
    categoria: [
      { nome: "cientifico" },
      { nome: "ficcao" }
    ]
  },
  {
    isbn: "139",
    titulo: "segredos do passado",
    categoria: [
      { nome: "drama" },
      { nome: "suspense" }
    ]
  },
  {
    isbn: "140",
    titulo: "labirinto das almas",
    categoria: [
      { nome: "terror" },
      { nome: "fantasia" }
    ]
  },
  {
    isbn: "141",
    titulo: "chamas do desejo",
    categoria: [
      { nome: "romance" },
      { nome: "drama" }
    ]
  },
  {
    isbn: "142",
    titulo: "alem da ciencia",
    categoria: [
      { nome: "cientifico" }
    ]
  },
  {
    isbn: "143",
    titulo: "o viajante do tempo",
    categoria: [
      { nome: "ficcao" },
      { nome: "aventura" }
    ]
  }
];
 produtos: IProdutos[]=
 [
  nome:"televisao"
  
 ]
}