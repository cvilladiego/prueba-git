import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica';

  numeros:number[] = [1,4,5,6,7];
  bebidaDelDia = 'Manzana';
  
 
}
