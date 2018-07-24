function Airplane(modal, seatingCap, maxSpeed) { //javascript constructor function
    
    this.modal = modal;                 // variable declaration and intilization
    this.seatingCap = seatingCap;
    this.maxSpeed = maxSpeed;

    this.print = function (){           //print function for Airplan
        console.log ("Plane Modal is "+ modal + " its seating capacity is "+ seatingCap + "  and speed is " + maxSpeed);
    }
}

var boing = new Airplane(777, 300, 500);            //creating new objects 
var airindia = new Airplane(666, 310, 400);
var jet = new Airplane(555, 320, 450);

boing.print();                                      // printing using object print method
airindia.print();
jet.print();

boing.seatingCap += 10;                            // incresing seating capacity of planes 
airindia.seatingCap += 10;
jet.seatingCap += 10;

delete Airplane.maxSpeed;                           // deleting max speed varible

Airplane.avgSpeed = 600;                            // adding average speed 



