console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function oddNums(count) {
    if (count < 0) {
        count = count * -1;

    }
    for (let i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

oddNums(7);
oddNums(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age = 26, Name = "Kal") {
    let aboveAge = `You can drive, ${Name}!`;
    let belowAge = `Sorry, ${Name} you are underage. You are not allowed to drive`;
    if (age >= 16) {
        console.log(aboveAge)
;
    } else {
        console.log(belowAge);
    }
}

checkAge();

// ex 3
console.log("EX 3--------------------")
function quadrant(x,y) {
    if (x > 0 && y > 0) {
        console.log(`${x}, ${y}: is in Quadrant 1`);

    } else if (x < 0 && y > 0) {
        console.log(`${x} , ${y}: is in Quadrant 2`);

    } else if (x < 0 && y < 0) {
        console.log(`${x} , ${y}: is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`${x} , ${y}: is in Quadrant 4`);
    } else if (x != 0 && y == 0) {
        console.log(`${x} , ${y}: x axis`);
    } else if (y != 0 && x == 0) {
        console.log(`${x} , ${y}: y axis`);
    } else {
        console.log(`${x}, ${y}: origin`)
    }
}
quadrant(4, 3);
quadrant(2, 0);
quadrant(0, 0);

// ex 4
console.log("EX 4--------------------")
function typeOfTriange(side1, side2, side3) {
    let isValid = false;
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        isValid = true;
    }
    if (isValid) {
        if (side1 == side2 && side2 == side3) {
            console.log(
                `Sides ${side1}, ${side2}, ${side3}: form quilateral triangle`
            
            );
        } else if (side1 == side2 || side2 == side3) {
            console.log(
                `Side ${side1}, ${side2}, ${side3} form esosceles triangle`
            );
        } else {
            console.log(`Sides ${side1}, ${side2}, ${side3} form a scalene triangle`)
        }
    }

    if (isValid == false) {
        console.log("Not a valid triangle");
    }
}

typeOfTriange(4, 4, 4);
typeOfTriange(2, 4, 4);
typeOfTriange(2, 2, 3);
typeOfTriange(2, 3, 4);

// ex 5
console.log("EX 5--------------------")


