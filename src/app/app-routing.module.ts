import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Page1Component } from './pages/page-1/page-1.component';
import { Page2Component } from './pages/page-2/page-2.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'searchResult',
    component: HomePageComponent,
  },
  {
    path: 'searchResult/householdReview',
    component: Page1Component,
  },
  {
    path: 'searchResult/householdReview/compareScreen',
    component: Page2Component,
  },
  {
    path: 'searchResult/compareScreen',
    component: Page2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
