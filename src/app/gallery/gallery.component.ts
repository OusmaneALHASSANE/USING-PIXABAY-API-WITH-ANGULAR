import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
// tslint:disable-next-line:ban-types
motCle: String = '';
images: any;
pageSize = 12;
currentPage = 1;
totalPages: number;
pages: Array<number> = [];
mode = 'LIST';
currentImage = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://pixabay.com/api/?key=13990660-9ad639a09f11356ae37f1161a&q=' + 'Mali' + '&per_page=' +
      this.pageSize + '&page=' + this.currentPage)
      .subscribe(data => {
        this.images = data;
        this.totalPages = this.images.totalHits;
        console.log(this.images.totalHits)
        // tslint:disable-next-line:triple-equals
        if (this.images.totalHits % this.pageSize != 0 ) {this.totalPages += 1; }
        if (this.totalPages > 10 ) { this.totalPages = 10; }

        this.pages = new Array(this.totalPages);
      });
  }

  getImages() {
    this.http.get('https://pixabay.com/api/?key=13990660-9ad639a09f11356ae37f1161a&q='
      + this.motCle + '&per_page=' + this.pageSize + '&page=' + this.currentPage)
    .subscribe(data => {
       this.images = data;
       this.totalPages = this.images.totalHits;
       console.log(this.images.totalHits)
      // tslint:disable-next-line:triple-equals
       if (this.images.totalHits % this.pageSize != 0 ) {this.totalPages += 1; }
       if (this.totalPages > 10 ) { this.totalPages = 10; }
       this.pages = new Array(this.totalPages);
    });
  }
  gotoPage(i: number ) {
    this.currentPage = i; this.getImages();
  }
  detailImage(im) { this.mode = 'DETAIL'; this.currentImage = im ; }
}
