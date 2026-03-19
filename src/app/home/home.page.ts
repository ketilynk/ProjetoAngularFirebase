import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import{Livro} from './livros.interface'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  livros: Livro[] = [
  {
    isbn:'123',
    titulo:'Uma breve historia do tempo',
    sinopse: 'um livro que te eleva a outro mundo',
    data_lancamento:'01/01/2001',
    paginas: '200',
    autor:[
      {nome:'steve hawking', email:'kdfir@gmail.com'}
    ],
    categoria: [
      {nome:'cientifico'}
    ],
    editora: {nome:'Erica', email:'editora@hotmail.com'}
  },
  {
    isbn:'124',
    titulo:'O universo numa casca de noz',
    sinopse: 'explorando conceitos avançados da física',
    data_lancamento:'02/02/2002',
    paginas: '250',
    autor:[
      {nome:'steve hawking', email:'hawking@gmail.com'}
    ],
    categoria: [
      {nome:'cientifico'}
    ],
    editora: {nome:'Moderna', email:'moderna@hotmail.com'}
  },
  {
    isbn:'125',
    titulo:'1984',
    sinopse: 'uma distopia sobre vigilância e controle',
    data_lancamento:'03/03/2003',
    paginas: '300',
    autor:[
      {nome:'george orwell', email:'orwell@gmail.com'}
    ],
    categoria: [
      {nome:'ficcao'}
    ],
    editora: {nome:'Companhia das Letras', email:'companhia@hotmail.com'}
  },
  {
    isbn:'126',
    titulo:'Dom Casmurro',
    sinopse: 'um clássico da literatura brasileira',
    data_lancamento:'04/04/2004',
    paginas: '220',
    autor:[
      {nome:'machado de assis', email:'machado@gmail.com'}
    ],
    categoria: [
      {nome:'romance'}
    ],
    editora: {nome:'Saraiva', email:'saraiva@hotmail.com'}
  },
  {
    isbn:'127',
    titulo:'O pequeno príncipe',
    sinopse: 'uma história poética e filosófica',
    data_lancamento:'05/05/2005',
    paginas: '150',
    autor:[
      {nome:'antoine de saint-exupery', email:'antoine@gmail.com'}
    ],
    categoria: [
      {nome:'infantil'}
    ],
    editora: {nome:'Agir', email:'agir@hotmail.com'}
  },
  {
    isbn:'128',
    titulo:'A revolução dos bichos',
    sinopse: 'uma crítica política em forma de fábula',
    data_lancamento:'06/06/2006',
    paginas: '180',
    autor:[
      {nome:'george orwell', email:'orwell@gmail.com'}
    ],
    categoria: [
      {nome:'ficcao'}
    ],
    editora: {nome:'Penguin', email:'penguin@hotmail.com'}
  },
  {
    isbn:'129',
    titulo:'O código Da Vinci',
    sinopse: 'mistério envolvendo arte e religião',
    data_lancamento:'07/07/2007',
    paginas: '350',
    autor:[
      {nome:'dan brown', email:'danbrown@gmail.com'}
    ],
    categoria: [
      {nome:'suspense'}
    ],
    editora: {nome:'Arqueiro', email:'arqueiro@hotmail.com'}
  },
  {
    isbn:'130',
    titulo:'Harry Potter e a Pedra Filosofal',
    sinopse: 'o início de uma saga mágica',
    data_lancamento:'08/08/2008',
    paginas: '320',
    autor:[
      {nome:'j k rowling', email:'rowling@gmail.com'}
    ],
    categoria: [
      {nome:'fantasia'}
    ],
    editora: {nome:'Rocco', email:'rocco@hotmail.com'}
  },
  {
    isbn:'131',
    titulo:'O senhor dos anéis',
    sinopse: 'uma jornada épica pela Terra Média',
    data_lancamento:'09/09/2009',
    paginas: '500',
    autor:[
      {nome:'j r r tolkien', email:'tolkien@gmail.com'}
    ],
    categoria: [
      {nome:'fantasia'}
    ],
    editora: {nome:'Martins Fontes', email:'martins@hotmail.com'}
  },
  {
    isbn:'132',
    titulo:'A garota no trem',
    sinopse: 'um thriller psicológico envolvente',
    data_lancamento:'10/10/2010',
    paginas: '280',
    autor:[
      {nome:'paula hawkins', email:'paula@gmail.com'}
    ],
    categoria: [
      {nome:'suspense'}
    ],
    editora: {nome:'Record', email:'record@hotmail.com'}
  },
  {
    isbn:'133',
    titulo:'Mindset',
    sinopse: 'a nova psicologia do sucesso',
    data_lancamento:'11/11/2011',
    paginas: '270',
    autor:[
      {nome:'carol dweck', email:'carol@gmail.com'}
    ],
    categoria: [
      {nome:'autoajuda'}
    ],
    editora: {nome:'Objetiva', email:'objetiva@hotmail.com'}
  }
]

 

}
