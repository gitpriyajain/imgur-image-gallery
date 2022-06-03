import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ImgurImageGalleryService } from './service/imgur-image-gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ImgurImageGalleryService],
})
export class AppComponent {
  title = 'imgur-image-gallery';
  images: any = [];
  url = 'https://api.imgur.com/3/gallery/hot/viral/day/0';
  loading: boolean = true;

  constructor(
    private imgurService: ImgurImageGalleryService,
  ) {}

  
  specsForm = new FormGroup({
    section: new FormControl('hot'),
    sort: new FormControl('viral'),
    period: new FormControl('day'),
  });

  ngOnInit() {
    this.getAlbum();
  }
  
  handleChange() {
    this.url = `https://api.imgur.com/3/gallery/${this.specsForm.value.section}/${this.specsForm.value.sort}/${this.specsForm.value.period}/0`;
    this.getAlbum();
  }

  getAlbum() {
    this.loading = true;
    this.images = this.imgurService.getAlbum(this.url).subscribe({
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
