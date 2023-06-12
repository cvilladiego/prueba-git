import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent {
  @Input() bebida : string = '' ;


}
