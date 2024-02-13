// navbar.component.ts
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarHeight: number = 0;
  isNavbarShrunk: boolean = false;
  isTopOfPage: boolean = true;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.navbarHeight = this.elementRef.nativeElement.offsetHeight;
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll() {
    const currentScrollPos = window.scrollY;
    this.isNavbarShrunk = currentScrollPos > 0;
    this.isTopOfPage = currentScrollPos === 0;
  }
}
