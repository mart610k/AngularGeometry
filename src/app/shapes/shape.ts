export abstract class Shape {

    _base : number;
    _height : number;

    constructor (base : number, height :number) { 
        this._base = base;
        this._height = height;
    }
    
    calcuateArea() : number {
        return this._base * this._height;
    }

    calculateCircumference() : number {
        return this._base * 2 + this._height * 2;
    }
}
