import { Component, OnInit } from '@angular/core';
import { menus, priceCategories, PriceCategory, prices } from '../../../menu';

@Component({
  selector: 'app-section-price',
  templateUrl: './section-price.component.html',
  styleUrls: ['./section-price.component.scss']
})
export class SectionPriceComponent implements OnInit {

  menus = menus;
  priceCategories = priceCategories;
  prices = prices;
  constructor() { }

  ngOnInit(): void {
  }

  getPrice(priceCategory: PriceCategory){
    return prices.filter(f => f.category == priceCategory.category);
  }

}
