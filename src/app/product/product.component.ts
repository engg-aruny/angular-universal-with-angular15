import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productName = "Fujifilm X-T4 26 MP Mirrorless Camera Body with XF16-80mm Lens";
  seoFrendlyUrl: string | undefined;


  constructor(private readonly router: Router,
    private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Product - Page');
    this.metaService.addTag({ name: 'description', content: 'Welcome to my product page!' });
  }

  ngOnInit(): void {
    this.seoFrendlyUrl = `/products/2/${this.getHyphenatedString()}`
  }

  goToProductDetail() {
    this.router.navigate(["products", 2, this.getHyphenatedString()])
  }

  getHyphenatedString() {
    let limitedTitle = this.productName.substring(0, 100);
    let hyphenatedString = limitedTitle
      .replace(",", "")
      .replace(/[^\w\s]/gi, '')
      .replace(/[\(\)]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    return hyphenatedString;
  }
}
