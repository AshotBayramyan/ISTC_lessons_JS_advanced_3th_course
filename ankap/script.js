// function calculate(bill){
//     var tokos;
//     if (bill < 50){
//         tokos = 0.2
//     } else if(bill >= 50 && bill < 200){
//          tokos = 0.15
//     } else { tokos = 0.1}
//     return tokos * bill;
// };

// var bills = [124, 48, 265];
// var tips = [calculate(bills[0]),
//             calculate(bills[1]),
//             calculate(bills[2])]
// var final = [tips[0] + bills[0],
//              tips[1] + bills[1],
//              tips[1] + bills[1]]
// console.log(tips, final)





// var mark = {
//     name: 'Mark',
//     mass: 70,
//     heigth: 1.8,
//     BMI: function(){
//         this.BMI = this.mass/(this.heigth * this.heigth)
//     }
// }
// var john = {
//     name: 'John',
//     mass: 80,
//     heigth: 1.7,
//     BMI: function(){
//         this.BMI = this.mass/(this.heigth * this.heigth)
//     }
// }
// mark.BMI();
// john.BMI();
// console.log(mark, john)

// function win(){
//     if (mark.BMI < john.BMI){
//         return john.name + ' win with ' + john.BMI
//     }else if(mark.BMI > john.BMI){
//         return mark.name + ' win with ' + mark.BMI
//     }
//     else {return 'equal' }
    
// }
// console.log(win())






// var x = ['a', 'b', 4, 3];

// for (var i = 0; i < x.length; i++){
//     if (typeof x[i] !== 'string') continue;
//   console.log(x[i])  
// }






var restorant = {
    bill: [124, 48, 268, 180, 42],
    calc: function(){

        this.tips = [];

    for (var i = 0; i < this.bill.lenght; i++){
        var porcent;
        var x = this.bill[i];
        if (x < 50) {
            porcent = 0.2;
        }else if (x >= 50 && x < 200){
            porcent = 0.15;
        }else {
            porcent = 0.1
        }

        this.tips[i] = x * porcent;
    }
        
    }
}
restorant.calc();
console.log(restorant);













































