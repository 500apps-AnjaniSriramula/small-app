let dice=Math.trunc(Math.random()*6)+1;
while(dice!==6){
    console.log(`${dice}`);
    dice =Math.trunc(Math.random()*6)+1;
    if(dice===6) console.log("loop is abt to end..");
}