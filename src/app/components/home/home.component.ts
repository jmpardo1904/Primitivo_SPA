import { Component,} from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {


 producto1: any={
   tipo:"Camiseta",
   precio:30000
   

 };

 producto2: any={
  tipo:"Gorra",
  precio:25000,
  talla2: "UNICA",
 }
tallas: string[]= ['S','M','L','XL'];
}
