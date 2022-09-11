import { Title } from '@angular/platform-browser';

export class faceSnap {
  title: string;
  description: string;
  imageUrl: string;
  creatDate: Date;
  snap: number;

  constructor(
    _title: string,
    _description: string,
    _imageUrl: string,
    _createDate: Date,
    _snap: number
  ) {
    this.title = _title;
    this.description = _description;
    this.imageUrl = _imageUrl;
    this.creatDate = _createDate;
    this.snap = _snap;
  }
}
