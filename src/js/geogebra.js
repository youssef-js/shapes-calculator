window.onload = function () {
    var regularShapes = { 
        //these are the defults, and can be changed.
        numberOfSides: 0,
        apothemLength: 0,
        sideLength: 0, 
        //calculautor method
        calculautor: function () {
            var result;
                if (this.numberOfSides === '') {
                    return alert('please enter the number of sides')
                } else if (this.apothemLength === '' && this.sideLength === '') {
                    return alert('please enter one of the dimentions, either the side or the apothem');
                } else {
                    if (this.apothemLength !== '' && this.sideLength === '') {
                        result = Math.tan(360/this.numberOfSides/2 * Math.PI / 180) * Math.pow(this.apothemLength, 2) * this.numberOfSides;
                    } else if (this.apothemLength === '' && this.sideLength !== '') {
                        result = this.numberOfSides * Math.pow(this.sideLength, 2) / 4 / Math.tan(360/this.numberOfSides/2 * Math.PI / 180);
                    } else if (this.apothemLength !== '' && this.apothemLength !== '') {
                        result = this.apothemLength * this.sideLength * this.numberOfSides / 2;
                    }
                }
                return alert(result);
            }
        }
    document.getElementById('calculate').onclick = function () {
        regularShapes.numberOfSides = document.getElementById('numberOfSides').value; 
        regularShapes.sideLength = document.getElementById('sideLength').value;
        regularShapes.apothemLength = document.getElementById('apothemLength').value;
        regularShapes.calculautor();
    };
    //Dont code after this curly brace.
}