import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

import { NgxColorsModule } from 'ngx-colors';

import {
  NgbCarouselModule,
  NgbModule,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from '@angular/cdk/layout';

import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionOneComponent } from './pages/main/section-one/section-one.component';
import { SectionTwoComponent } from './pages/main/section-two/section-two.component';
import { SwiperJSComponent } from './shared/swiper-carousel/swiper.component';
import { SwiperDetailComponent } from './shared/swiper-details/swiper-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { SectionThreeComponent } from './pages/main/section-three/section-three.component';
import { SectionFourExtrasComponent } from './pages/main/section-four-extras/section-four-extras.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EmailSentComponent } from './shared/email-sent/email-sent.component';
import { GuidanceComponent } from './pages/guidance/guidance.component';
import { RoomPackageDetailsComponent } from './pages/room-package-details/room-package-details.component';
import { MiniFormComponent } from './shared/mini-form/mini-form.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { MeasurementGuidanceComponent } from './pages/measurement-guidance/measurement-guidance.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SwiperJSComponent,
    SwiperDetailComponent,
    AboutComponent,
    SectionThreeComponent,
    SectionFourExtrasComponent,
    GalleryComponent,
    ContactsComponent,
    EmailSentComponent,
    GuidanceComponent,
    RoomPackageDetailsComponent,
    MiniFormComponent,
    QuestionnaireComponent,
    SpinnerComponent,
    ErrorMessageComponent,
    MeasurementGuidanceComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    NgxColorsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
