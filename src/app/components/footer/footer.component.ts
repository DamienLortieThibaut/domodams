import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerItems: any[] = [
    {
      name: 'Home',
      subItems: [
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Projects',
          url: '/projects'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    },
    {
      name: 'Social',
      subItems: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com'
        },
        {
          name: 'Twitter',
          url: 'https://www.twitter.com'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com'
        }
      ]
    },
    {
      name: 'Website',
      subItems: [
        {
          name: 'Privacy Policy',
          url: '/privacy-policy'
        },
        {
          name: 'Terms of Use',
          url: '/terms-of-use'
        },
        {
          name: 'Sitemap',
          url: '/sitemap'
        }
      ]
    }
]

}
