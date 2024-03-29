import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';


  constructor(private router:Router){
    
  }

  goToDepartments(){
    this.router.navigate(['department'])
  }

  goToPersons(){
    this.router.navigate(['person'])
  }
}
