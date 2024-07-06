import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-afterviewinit',
  templateUrl: './afterviewinit.component.html',
  styleUrls: ['./afterviewinit.component.css']
})
export class AfterviewinitComponent implements AfterViewInit,AfterViewChecked {

  ngAfterViewInit(): void {
      console.log('Hello am from NgAfterViewInit..')
  }

  ngAfterViewChecked(): void {
      console.log('am from ViewChecked....')
  }
}
