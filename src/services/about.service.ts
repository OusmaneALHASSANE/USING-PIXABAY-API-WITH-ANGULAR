import {Injectable} from '@angular/core';

@Injectable()
export  class AboutService {
 info  = {
    nom: 'ALHASSANE',
    email: 'oalhassane06@gmail.com',
    tel: '0687967165'
  };
  comments = [
    {date: new Date(), message: 'A'},
    {date: new Date(), message: 'B'},
    {date: new Date(), message: 'C'},
    {date: new Date(), message: 'D'},

  ];
  addComment(c) {
    c.date =  new Date();
    this.comments.push(c);
  }
  getAllComments() {
    return this.comments;
  }
  getInfo() {
    return this.info;
  }

}
