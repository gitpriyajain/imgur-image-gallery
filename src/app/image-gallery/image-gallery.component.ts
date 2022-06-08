import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ImgurImageGalleryService } from '../service/imgur-image-gallery.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  title = 'imgur';
  images: any = [];
  url = 'https://api.imgur.com/3/gallery/hot/viral/day/0';
  loading: boolean = true;

  constructor(
    private imgurService: ImgurImageGalleryService,
    private _location: Location
  ) {}

  specsForm = new FormGroup({
    section: new FormControl('hot'),
    sort: new FormControl('viral'),
    period: new FormControl('day'),
  });

  ngOnInit() {
    this.getAlbum();
  }

  onSubmit() {}

  handleChange() {
    this.url = `https://api.imgur.com/3/gallery/${this.specsForm.value.section}/${this.specsForm.value.sort}/${this.specsForm.value.period}/0`;
    // this._location.back();

    this.getAlbum();
  }

  getAlbum() {
    this.loading = true;
    this.images = this.imgurService.getImages(this.url).subscribe({
      next: (album: { data: any }) => {
        this.images = album.data;
        this.images = this.images.filter((image: any) => {
          return image.images && image.images[0].type !== 'video/mp4';
        });
        this.loading = false;
      },
      error: (err: any) => console.log(err),
    });
  }
}
