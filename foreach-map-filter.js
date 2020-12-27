function doubleValues(arr){
    const doubled = [];
    arr.forEach(function(val){
        doubled.push(val*2);
    })
    return doubled;
}

function onlyEvenValues(arr){
    const withforEach = [];
    arr.forEach(function(val){
        if(val%2===0){
            withforEach.push(val);
        }
    })
    const withFilter = arr.filter(function(val){
        return val % 2 === 0;
    })
    
    return withforEach;
}

function showFirstAndLast(arr){
    const FandL = arr.map(function(val){
       return `${val[0]}${val[val.length-1]}`;
    })
    return FandL;
}

function addKeyAndValue(arr,key,value){
    const newarry= arr.map(function(obj){
        obj[key] = value;
        return obj;
    });
    return newarry;
}

function vowelCount(str){
    const vowels = 'aeiou';
    const countObj = {};
    const strlower = str.toLowerCase();
    const strArr = strlower.split('');
    strArr.forEach(function(char){
        if(vowels.includes(char)){
            if(countObj[char]===undefined){
                countObj[char] = 1;
            }else{
                countObj[char] = countObj[char] + 1;
            }
        }
   })
   return countObj;
}

function doubleValuesWithMap(arr) {
    return arr.map(function(val){
       return val*2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val*i;
    })
}

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    })
}

function extractFullName(arr){
    return arr.map(function(val){
        return `${val.first} ${val.last}`;
    })
}

function filterByValue(arr, key) {
    return arr.filter(function(val){
        return val[key];
    })
}

function find(arr, searchValue) {
    const newarr = arr.filter(function(value){
        return value === searchValue;
    })
    if(newarr.length === 0){
        return undefined;
    }else{
        return newarr[0];
    }
}

function findInObj(arr, key, searchValue) {
    const firstFound = arr.filter(function(val){
       return val[key] === searchValue;
    })
    return firstFound[0];
}

function removeVowels(str) {
    const vowels = 'aeiou';
    const strToLower = str.toLowerCase();
    const strArr = strToLower.split('');

    const newStr = strArr.filter(function(val){
        return !vowels.includes(val);
    });
    return newStr.join('');
}

function doubleOddNumbers(arr) {
    const filterOdd = arr.filter(function(val){
        return !(val%2===0);
    })
    const doubleOdd = filterOdd.map(function(val){
        return val * 2;
    })
    return doubleOdd;

}
