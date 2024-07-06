import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})

export class ObservableComponent implements OnInit{

  obs=new Observable((arg)=>{
    arg.next("Hello am from Observable...");
    arg.next("94398348943");
    arg.complete();
    arg.error('error message here...')
  })

ngOnInit(): void {
  
  setTimeout(()=>{
  this.obs.subscribe(
    data=>console.log(data),
   err=>console.log(err),
   ()=>console.log(' Complete')
  
  )},10000)
 
}

}
