'use strict';

function thousands_separators(num) {
    var newNum=[];
    var numberString="";

    num=num+"";
    newNum=num.split(".");

    numberString=buildFirstNum(newNum);
    return (numberString);
}

function  splitNumber(newNum){
    var numberString="";
    var count=0;

    for (var i = newNum[0].length-1; i >= 0; i--) {
        if (count % 3 === 0 && count != 0) {

            numberString = newNum[0].charAt(i) + "," + numberString;
        } else {
            numberString = newNum[0].charAt(i) + numberString;

        }
        count++;
    }
    return numberString;
}

function buildDecimalPart(newNum){

    var decimalPart = "";

    if (newNum[1] != "0") {

        for (var i = newNum[1].length-1; i >= 0; i--) {

            decimalPart = newNum[1].charAt(i) + decimalPart;
        }
    }

    return decimalPart;
}

function  buildFirstNum(newNum){

    var numberString="";

    if(newNum.length===1){

        numberString=splitNumber(newNum);
    }
    else {

        numberString=splitNumber(newNum)+"."+buildDecimalPart(newNum);
    }

    return numberString;
}

module.exports = thousands_separators;
