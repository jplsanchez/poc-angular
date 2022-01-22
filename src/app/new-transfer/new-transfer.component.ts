import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transference } from '../models/transference.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {

  @Output() atTransfer = new EventEmitter<any>();

  value: number;
  target: number;

  constructor(private service: TransferService, private router: Router) {

  }

  transfer() {
    console.log('Solicitada a transferencia');

    const valueEmit: Transference = { value: this.value, target: this.target }
    //this.atTransfer.emit(valueEmit);

    this.service.add(valueEmit).subscribe(
      result => {
        console.log(result);
        this.cleanFields();
        this.router.navigateByUrl('extract')
      },
      error => console.error(error)
    );

  }

  cleanFields() {
    this.value = null;
    this.target = null;
  }
}
