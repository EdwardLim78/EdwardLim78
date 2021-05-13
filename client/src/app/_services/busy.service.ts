import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyServiceCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyServiceCount++;
    this.spinnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333'
    });
  }

  idle() {
    this.busyServiceCount--;
    if(this.busyServiceCount <=0 ) {
      this.busyServiceCount=0;
      this.spinnerService.hide();
    }
  }
}
