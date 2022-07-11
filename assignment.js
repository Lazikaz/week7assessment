function sumToZero(array){
    for(i = 0; i < array.length - 1; i++){
        for(j = 1; j < array.length; j++){
            if(array[i] + array[j] === 0){
                return(`${array[i]} + ${array[j]}`)
            }
        }
    }
    return("No possible combination returns to 0")
}

function uniqueWord(string){
    let arr = string.split("")
    for(i = 0; i < arr.length - 1; i++){
        for(j = 1; j < arr.length; j++){
            if(array[i] === array[j]){
                return false
            }
        }
    }
    return true
}

function pangram(sentence){
    let realSentence = sentence.toLowerCase()
    let arr = realSentence.split("")
    let alphabet = new Set()
    arr.forEach(element => {
        if(element !== "." && element !== "!" && element !== " "){
            alphabet.add(element)
        }
    })
    if(alphabet.size === 26){
        return true
    }
    else{
        return false
    }
}

function find_longest_word(array){
    let longestWordLetterCount = 0
    for(i = 0; i < array.length; i++){
        if(array[i].length > longestWordLetterCount){
            longestWordLetterCount = array[i].length
        }
    }
    return longestWordLetterCount
}

console.log(find_longest_word(["hi", "hello", "biggest"]))