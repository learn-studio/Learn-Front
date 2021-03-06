import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

}
