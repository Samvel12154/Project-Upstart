import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  Facebook = faFacebook
  Instagram = faInstagram
  Twitter = faTwitter
  data: Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
