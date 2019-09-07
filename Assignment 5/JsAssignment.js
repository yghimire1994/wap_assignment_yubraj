
function maxTwo(n1, n2){
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function maxThree(n1,n2,n3) {
    if((n1>n2) & (n1>n3)) {
        return n1;
    }
    else if ((n2>n1) & (n2>n3)){
        return n2;
    }
    else {
        return n3;
    }
}

function isVowel(character) {
    var character = character.toLowerCase();
    var vowels = (['a','e','i','o','u']);
    for(var i=0; i<vowels.length;i++) {
        if (vowels[i] != character) {
            continue;
        }
        return true;
    }
            return false;
        }

function findsum(numbers) {
    var sum =0;
    for(var i=0; i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}
function findproduct(numbers) {
    var prod =1;
    for(var i=0; i<numbers.length;i++){
        prod*=numbers[i];
    }
    return prod;
}

function reverseString(string) {
    var reversed="";
    for(var i=string.length-1; i>=0;i--){
        reversed+=string[i];
    }
    return reversed;

}

function findLongestWord(sentence) {
    var spltsentence=sentence.split(' ');
    var longestWordPosition = 0;
    for(var i=0; i<spltsentence.length;i++){
        if(spltsentence[i].length>longestWordPosition){
            longestWordPosition=spltsentence[i].length;
        }

    }
    return longestWordPosition;
    
}
function filterLongWords(sentences,len) {
    var seperateWords=sentences.split(" ");
    var newword=[];
    for(var i=0;i<seperateWords.length-1;i++){
        if(seperateWords[i].length>len){
            newword.push(seperateWords[i]);
        }
    }
    return newword;
    
}


const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
})

const c = a.filter(function(elem, i, array){
    return elem == 3;});

const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
