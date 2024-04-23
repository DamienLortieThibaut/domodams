import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialNetwork = [
    {
      path: "../../../assets/tiktok.png",
      label: "TikTok"
    },
    {
      path: "../../../assets/instagram.png",
      label: "Instagram"
    },
    {
      path: "../../../assets/facebook.png",
      label: "Facebook"
    }
  ];
}
