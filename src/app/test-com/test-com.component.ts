import { Component, OnInit } from '@angular/core';
import { Triangle } from "../shapes/triangle";
import { Square } from "../shapes/square";
import { createLoweredSymbol } from '@angular/compiler';

@Component({
  selector: 'app-test-com',
  templateUrl: './test-com.component.html',
  styleUrls: ['./test-com.component.css']
})
export class TestComComponent implements OnInit {
  lenghID : number;
  heightID : number;
  calculatedArea : number = 0 ;

  
  constructor() { 
    let triable = new Triangle(2,5);
    console.log(triable.calcuateArea());
  }
  
  doSomething() : void{
    console.log("---------------------------------------------");
    console.log(this.lenghID);
    console.log(this.heightID);
    let square = new Square(this.lenghID,this.heightID);
    this.calculatedArea = square.calcuateArea();
    console.log(square.calcuateArea());
  }
  //TODO: Find out how to actually set up an event to save it for real.
  //(its currently only through a switch case)... 
  change(event) {
    // console.log(event.target.value);
    // console.log(event.target.id);
    switch(event.target.id){
      case "HeightID":
        this.heightID = event.target.value;
        break;
     case"LengthID":
        this.lenghID = event.target.value
        break;
    }

  }
  
  ngOnInit(): void {
  }
  
}
