import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-alerts', //用于标识组件。Angular组件选择器以前缀app-开头，后跟组件名称

  //模板和样式文件名引用了组件的HTML和CSS
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//该类会处理组件的功能
export class ProductAlertsComponent {
  @Input() product! : Product;
  @Output() notify = new EventEmitter
}
