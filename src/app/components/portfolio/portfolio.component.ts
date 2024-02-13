import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images = [
    { url: './assets/images/portfolio-1.png' },
    { url: './assets/images/portfolio-2.png' },
    { url: './assets/images/portfolio-3.png' },
    { url: './assets/images/portfolio-1.png' },
    { url: './assets/images/portfolio-2.png' },
    { url: './assets/images/portfolio-3.png' },
  ];

  isPopupVisible: boolean = false;
  popupImageUrl: string = '';

  openPopup(imageUrl: string) {
    this.popupImageUrl = imageUrl;
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
