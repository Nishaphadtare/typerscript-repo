enum Gender {
    Male,
    Female
}



console.log(Gender.Male);
console.log(Gender[1]);

// weekends 
enum WeekEnds {
    Saturday = 6,
    Sunday = 7
}

console.log(WeekEnds[0]); // o/p undefined  

// By deafult 0 and 
// Here explicitly assign the value 6 

enum OrderSatus {
    Pending = 1,
    Processing = 2,
    Shipped = 3,
    Deliverd = 4
}