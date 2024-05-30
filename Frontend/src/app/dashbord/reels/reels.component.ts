import { Component } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html' ,
  styleUrl: './reels.component.css',
})
export class ReelsComponent {
  videos: any[] = [
    { url: '/assets/v6.mp4' },
    { url: '/assets/v2.mp4' },
    { url: '/assets/v3.mp4' },
    { url: '/assets/v4.mp4' },
    { url: '/assets/v5.mp4' },
    { url: '/assets/v6.mp4' },
    { url: '/assets/v7.mp4' },
    {url: '/assets/v8.mp4' },
    { url: '/assets/v9.mp4' },
    { url: '/assets/v10.mp4' },
    { url: '/assets/v11.mp4' },
    {  url: '/assets/v12.mp4' },
    { url: '/assets/v13.mp4' },
    {  url: '/assets/v14.mp4' },
    {  url: '/assets/v15.mp4' },
    {  url: '/assets/v16.mp4' },

   
    
    // Add more video data as needed
  ];
currentIndex = 0;
  currentVideo: any;

constructor() {
  this.currentVideo = this.videos[this.currentIndex];
}
nextVideo() {
  if (this.currentIndex < this.videos.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0; // Start from the beginning if index is out of bounds
  }
  this.currentVideo = this.videos[this.currentIndex];
}


previousVideo() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.currentVideo = this.videos[this.currentIndex];
  }}

}
