import { Component, Input, OnInit } from '@angular/core';
import { Transference } from '../models/transference.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transferences: Array<any>;

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    //this.transferences = this.service.transferences;
    this.service.todas().subscribe((transferences: Array<Transference>) => {
      this.transferences = transferences;
    });
  }

}
