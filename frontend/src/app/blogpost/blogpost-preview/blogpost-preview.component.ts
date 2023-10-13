import {Component, Input, OnInit} from '@angular/core';
import {Blogpost} from "../Blogpost";

@Component({
  selector: 'app-blogpost-preview',
  templateUrl: './blogpost-preview.component.html',
  styleUrls: ['./blogpost-preview.component.css']
})

export class BlogpostPreviewComponent implements OnInit{
  @Input() blogpost! : Blogpost

  ngOnInit(): void {
    console.log(this.blogpost.toString())
  }






}
