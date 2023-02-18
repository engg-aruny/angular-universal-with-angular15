import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('My Website - About');
    this.metaService.addTag({ name: 'description', content: 'Here is few lines about me!' });
  }
}
