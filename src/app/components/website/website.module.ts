import { WebFooterComponent } from './layouts/web-footer/web-footer.component';
import { WebHeaderComponent } from './layouts/web-header/web-header.component';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { BooknowComponent } from './components/booknow/booknow.component';
import { ServicedetailComponent } from './components/servicedetail/servicedetail.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'contact-us',
        component: ContactComponent,
      },
      {
        path: 'about-us',
        component: AboutComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'booknow',
        component: BooknowComponent,
      },
      {
        path: 'service-detail',
        component: ServicedetailComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    WebFooterComponent,
    WebHeaderComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    BooknowComponent,
    ServicedetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class WebsiteModule { }
