import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GuidanceComponent } from './pages/guidance/guidance.component';
import { MainComponent } from './pages/main/main.component';
import { MeasurementGuidanceComponent } from './pages/measurement-guidance/measurement-guidance.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';

import { SwiperDetailComponent } from './shared/swiper-details/swiper-detail.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/project-images', component: SwiperDetailComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'home/guidance', component: GuidanceComponent },
  {
    path: 'home/measurements-guidance',
    component: MeasurementGuidanceComponent,
  },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
