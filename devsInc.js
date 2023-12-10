function Roll(){
        let max = parseInt(document.getElementById("dicenum").value);
        let min = 1;
        let results = Math.floor(Math.random()*(max - min + 1) + min);
        document.getElementById("rolled").innerText = "You have rolled: " + results;
}
function test(maxm){

    let minm = 1;
    let result = Math.floor(Math.random()*(maxm - minm + 1) + minm);
    let minmax = result+1;

    if(result < minmax){
        return true;
    }
}

module.exports = {test,Roll};