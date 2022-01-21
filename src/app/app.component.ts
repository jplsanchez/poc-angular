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

  //json-server --watch db.json --port 5001

}
