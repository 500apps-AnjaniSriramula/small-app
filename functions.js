let calcAverage=(a,b,c)=>(a+b+c)/3;
let scoreDol=calcAverage(44,23,71);
let scoreKol=calcAverage(65,54,49);
console.log(scoreDol,scoreKol);

function checkWinner(avgDol,avgKol){
    if(avgDol>=2*avgKol){
        console.log(`dolphins win (${avgKol})vs ${avgDol}`);
    }
    else if(avgKol>=2*avgDol){
        console.log(`Kolas win (${avgKol})vs ${avgDol}`);
    }
    else{
        console.log('No team wins');
    }
}
checkWinner(scoreDol,scoreKol);
checkWinner(576,111);
//test2
scoreDol=calcAverage(85,54,41);
scoreKol=calcAverage(23,34,27);
console.log(scoreDol,scoreKol);
checkWinner(scoreDol,scoreKol);
