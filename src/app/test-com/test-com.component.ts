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
  lengthID : number;
  heightID : number;
  calculatedArea : number = 0 ;
  calculatedCircumference : number = 0;

  
  constructor() { 
    let triable = new Triangle(2,5);
    console.log(triable.calcuateArea());
  }
  
  doSomething(): void{
    console.log("---------------------------------------------");
    console.log(this.lengthID);
    console.log(this.heightID);
    let square = new Square(this.lengthID,this.heightID);
    this.calculatedArea = square.calcuateArea();
    console.log(square.calcuateArea());
    this.calculatedCircumference = square.calculateCircumference()
    
  }
  //TODO: Find out how to actually set up an event to save it for real.
  //(its currently only through a switch case)... 
  change(event) {
    switch(event.target.id){
      case "HeightID":
        this.heightID = event.target.value;
        break;
     case"LengthID":
        this.lengthID = event.target.value
        break;
    }

  }
  
  ngOnInit(): void {
  }
  
}
