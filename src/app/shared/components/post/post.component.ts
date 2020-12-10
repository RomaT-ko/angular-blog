import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Post } from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
    console.log('post: ', this.post);
  }

}
