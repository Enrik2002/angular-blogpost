import {Component, OnInit} from '@angular/core';
import {BlogpostService} from "../blogpost.service";
import {Blogpost} from "../Blogpost";
import {ActivatedRoute} from "@angular/router";
import {filter, pipe} from "rxjs";

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit{

  blogpost : Blogpost;
  id : number;
  constructor(private blogpostService : BlogpostService, private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogpostService.getBlogposts().subscribe((blogs) => {
        const ab = blogs as Array<Blogpost>;
        this.blogpost = ab.find( bp => parseInt(params['id']) === bp.id);
      });
    });

  }
}
