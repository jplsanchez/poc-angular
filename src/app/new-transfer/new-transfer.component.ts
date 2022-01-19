import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  value: number;
  target: number;
  transfer() {
    console.log('Soliciatada a transferencia');
    console.log('Valor: ', this.value);
    console.log('Destino: ', this.target);
  }
}
