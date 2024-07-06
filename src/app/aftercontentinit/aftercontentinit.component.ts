import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-aftercontentinit',
  templateUrl: './aftercontentinit.component.html',
  styleUrls: ['./aftercontentinit.component.css']
})
export class AftercontentinitComponent implements AfterContentInit,AfterContentChecked {
ngAfterContentInit(): void {
    console.log('Hi am from ngAfterContentInIt...')
}
ngAfterContentChecked(): void {
    console.log('Hello am Checked...')
}
}
