import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {

  @Output() atTransfer = new EventEmitter<any>();

  value: number;
  target: number;

  transfer() {
    console.log('Solicitada a transferencia');

    const valueEmit = { value: this.value, target: this.target }
    this.atTransfer.emit(valueEmit);

    this.cleanFields();
  }

  cleanFields() {
    this.value = null;
    this.target = null;
  }
}
