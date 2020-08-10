import {Shape} from "./shape";

export class Triangle extends Shape {
    constructor (base : number, height :number) { 
        super(base,height);
    }

    calcuateArea() : number {
        return this._base * this._height / 2;
    }
}
