import { Component } from '@angular/core';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-angular';

  constructor(private service: TransferService) {

  }

  transfer($event) {
    let t = $event;
    this.service.add($event);
  }

}
