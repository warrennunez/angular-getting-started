import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  ngOnInit(): void {
    console.log(products);
  }

  //console.log(products);
  viewLog(x){
    console.log(x);
    //console.log(window);
  }

  share() {
    window.alert('The product has been shared!');
    this.viewLog(products);
  }

  onNotify() {
    this.viewLog(products);
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/