import { products } from "../products";
import {Component} from "@angular/core";

@Component({
  selector: 'app-product-list', //用于标识组件。Angular组件选择器以前缀app-开头，后跟组件名称

  //模板和样式文件名引用了组件的HTML和CSS
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {

  products = [...products];

  share() {
    window.alert('The product has been shared!')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
