import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  postsLimit:string = '?_limit=25';

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
    
  }

  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions)
  }
}
