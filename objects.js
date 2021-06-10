/*const { StringDecoder } = require("string_decoder");

const jones={
    firstname:'john',
    lastname:'schem',
    bod:1991,
    job: 'SoftwareDevolop',
    friends:['sam','peter','setev'],
    hasDriver:false,
    //calcAge: function(bod){
       // return 2032-bod;
    //}
    calcAge:function(){
       //console.log(this);
        return 2032-this.bod;
    },
    getSummary:function(){
        return `${this.firstname} is a ${this.calcAge()} years old 
        ${this.job}, and he has ${this.hasDriver ?'a':'no'} driver license`
    }
};
console.log(jones.calcAge());
//console.log(jones['calcAge'](1991));
console.log(jones.getSummary())*/
const john={
    fullName:'john smith',
    mass:85,
    height:1.76,
    calcBMI:function(){
        this.BMIJohn=this.mass/(this.height**2);
        return this.BMIJohn;
    }
};
const mark={
    fullName:'mark miller',
    mass:95,
    height: 1.88,
    calcBMI: function(){
        this.BMIMark=this.mass/this.height**2;
        return this.BMIMark;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(john.BMIJohn,mark.BMIMark);
if (mark.BMIMark>john.BMIJohn){
    console.log(`${mark.fullName} BMI ${mark.BMIMark} is higher than ${john.fullName} BMI ${john.BMIJohn}`);
}
else if(john.BMIJohn>mark.BMIMark){
    console.log(`${john.fullName} BMI ${john.BMIJohn} is higher than ${mark.fullName} BMI ${mark.BMImark}`);
}
else{
    console.log("both are equal");
}
