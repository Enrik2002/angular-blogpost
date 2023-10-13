import {Injectable, OnInit} from '@angular/core';
import {Blogpost} from "./Blogpost";
import {HttpClient} from "@angular/common/http";
import {filter, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogpostService implements OnInit {

  constructor(private http: HttpClient) {

  }

  getBlogposts() {
    console.log('hehehe')
    return this.http.get('assets/BlogMocks.json')
  }




  ngOnInit(): void {
    console.log('trying something')

  }
}
