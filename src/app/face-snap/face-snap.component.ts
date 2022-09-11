import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap: faceSnap;
  // title!: string;
  // description!: string;
  // createDate!: Date;
  // snaps!: number;
  title = 'Archibal';
  description = 'Mon meilleur ami';
  createDate = new Date();
  snaps = 6;
  imageUrl =
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  buttonText = 'Oh Snap!';

  ngOnInit() {
    // this.title = 'Archibal';
    // this.description = 'Mon meilleur ami';
    // this.createDate = new Date();
    // this.snaps = 6;
  }
  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
