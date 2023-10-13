import {Component, Injectable, OnInit} from '@angular/core';
import {BlogpostService} from "../blogpost.service";
import {Blogpost} from "../Blogpost";

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogposts: Array<Blogpost> = [];
  loading = false;
  displayedBlogposts: Array<Blogpost> = [];
  maxDisplayedBlogs = 12;
  currentPage = 1;

  constructor(private blogService: BlogpostService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.blogService.getBlogposts().subscribe(blogs => {
      this.blogposts = blogs as Array<Blogpost>;
      this.updateDisplayedBlogs(this.currentPage)
      this.loading = false;
    });
  }

  updateDisplayedBlogs(index) {
    this.currentPage = index;
    console.log(this.currentPage)
    this.displayedBlogposts = this.blogposts
      .slice((index - 1) * this.maxDisplayedBlogs, (index) * this.maxDisplayedBlogs);
  }
}
