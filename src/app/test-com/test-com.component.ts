import { Component, OnInit } from '@angular/core';
import { Triangle } from "../triangle";

@Component({
  selector: 'app-test-com',
  templateUrl: './test-com.component.html',
  styleUrls: ['./test-com.component.css']
})
export class TestComComponent implements OnInit {

  constructor() { 
    let triable = new Triangle(3,5);
    console.log(triable.calcuateArea());
  }
  
  
  
  ngOnInit(): void {
  }

}
