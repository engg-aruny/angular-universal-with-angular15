import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('My Website - Home');
    this.metaService.addTag({ name: 'description', content: 'Welcome to my website!' });
  }
}
