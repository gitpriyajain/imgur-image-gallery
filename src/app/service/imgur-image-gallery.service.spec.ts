import { TestBed } from '@angular/core/testing';

import { ImgurImageGalleryService } from './imgur-image-gallery.service';

describe('ImgurAngularServiceService', () => {
  let service: ImgurImageGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgurImageGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
