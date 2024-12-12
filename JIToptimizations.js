// Not declare object properties in constructor
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let p1 = new Point(11, 22);  // hidden class Point created
let p2 = new Point(33, 44);

p1.z = 55;  // another hidden class Point created

// Keep object property ordering constant
const a1 = { a: 1 };  // hidden class a1 created
a1.b = 3;

const a2 = { b: 3 };  // different hidden class a2 created
a2.a = 1;

// Fix function argument types
function add(x, y) {
    return x + y
}

add(1, 2);  // monomorphic
add("a", "b");  // polymorphic
add(true, false);
add([], []);
add({}, {});  // megamorphic

// Not declare classes in script scope
function createPoint(x, y) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    return new Point(x, y);
}

