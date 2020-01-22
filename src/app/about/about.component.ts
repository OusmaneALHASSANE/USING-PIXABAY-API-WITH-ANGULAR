import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos: any;
  comments = [];
  comment = {date: null, message: ''};
  constructor( private aboutService: AboutService ) { }

  ngOnInit() {
    this.comments = this.aboutService.getAllComments();
    this.infos = this.aboutService.getInfo();
  }
  onAddComment(c) {
    this.aboutService.addComment(c);
    this.comments = this.aboutService.getAllComments();
    this.comment = {date: null, message: '' };
  }
}
