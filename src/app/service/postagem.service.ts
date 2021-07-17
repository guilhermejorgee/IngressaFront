import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token).set('Content-Type','application/json').set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
  }




  getAllPostagensComuns(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://redeingressa.herokuapp.com/postagens/comuns', {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getAllPostagensVagas(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://redeingressa.herokuapp.com/postagens/vagas', {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://redeingressa.herokuapp.com/postagens', postagem, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagensEmAlta(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://redeingressa.herokuapp.com/postagens/emaltasemana', {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagemDeUsuario(id:number): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://redeingressa.herokuapp.com/postagens/usuario/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  putPostagemDeUsuario(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://redeingressa.herokuapp.com/postagens', postagem, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagemById(id:number):Observable<Postagem>{
    return this.http.get<Postagem>(`https://redeingressa.herokuapp.com/postagens/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }
  //pegar vaga publicada
  getVagasById(id:number):Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://redeingressa.herokuapp.com/postagens/vaga/usuario/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  deletePostagem(id: number){
    return this.http.delete(`https://redeingressa.herokuapp.com/postagens/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  contCurtidaPostagem(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://redeingressa.herokuapp.com/postagens/curtir/${id}`, null, {    headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  contRemoverCurtidaPostagem(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://redeingressa.herokuapp.com/postagens/descurtir/${id}`, null, {    headers: new HttpHeaders().set('Authorization', environment.token)})
  }

}
