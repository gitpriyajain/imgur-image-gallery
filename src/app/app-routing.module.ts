import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: AppComponent },
      { path: 'image/:id', component: ImageDetailsComponent },
      { path: 'home', component: ImageGalleryComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
