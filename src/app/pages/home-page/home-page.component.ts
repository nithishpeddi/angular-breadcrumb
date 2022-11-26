import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title: string = 'Home Page';

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle(this.title);
  }

  open(path: string) {
    this.router.navigateByUrl(path);
  }
  openWith(path: string) {
    this.router.navigateByUrl(path);
  }
  openWithOne(path: string){
    this.router.navigateByUrl(path);
  }
}
