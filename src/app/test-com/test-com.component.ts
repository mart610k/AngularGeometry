import { Component, OnInit } from '@angular/core';

import { Square } from "../shapes/square";
import { Rectangle } from "../shapes/rectangle"
import { createLoweredSymbol } from '@angular/compiler';
import { Shape } from "../shapes/shape";

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
  shape : shapes = shapes.square;
  
  constructor() { 
    this.shape = shapes.square;
  }
  
  calculateAreaAndCircumference(): void{

    let shape : Shape;
    if( this.shape === shapes.square){
        shape = new Square(this.heightID);
    }
    else{
      shape = new Rectangle(this.heightID,this.lengthID);
    }
    this.calculatedArea = shape.calcuateArea();
    console.log(shape.calcuateArea());
    this.calculatedCircumference = shape.calculateCircumference();
    
  }

  //TODO: Find out how to actually set up an event to save it for real.
  //(its currently only through a switch case)... 
  //Used to react's setState() way of updating values.
  handleHeightOrLenghtChange(event) {
    switch(event.target.id){
      case "HeightID":
        this.heightID = event.target.value;
        break;
     case"LengthID":
        this.lengthID = event.target.value;
        break;
    }

  }

  //changes the value for the enum shape
  shapeChangeEvent(event){
    this.shape = event.target.value;
  }
  
  ngOnInit(): void {
  }
  
}
enum shapes{
  rectangle,
  square
}
