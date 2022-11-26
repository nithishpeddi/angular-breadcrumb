import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss'],
})
export class Page2Component {
  constructor(private router: Router) {}

  open(path: string) {
    this.router.navigateByUrl(path);
  }
}
