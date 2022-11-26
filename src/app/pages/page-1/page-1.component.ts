import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.scss'],
})
export class Page1Component {
  constructor(private router: Router) {}

  open(path: string) {
    this.router.navigateByUrl(path);
  }
}
