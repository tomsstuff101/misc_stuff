const alpha = ()=>{
    let myArray = ["Elishka", "Dan", "Ashley", "Connor", "Ben"]
    let sorted = myArray.sort()

    console.log(sorted)
    return sorted
}

alpha()

const varAsString = () => {

    let string ="Bob Hoskins"

    let stringArrSort = string.split("").sort()

    return stringArrSort

}

varAsString()


const codeNation = () =>{
    let codenation = "codenation"

    let codeN = codenation.split("").sort()

    console.log(codeN)

    return codeN
}

// codeNation()


const splicy = () => {

    let benArr = "Benjamin".split("")
    let spliIt = benArr.splice(0,3)

    console.log(spliIt)
}

// splicy()

const fruity = ()=>{

    let array1 = ["apple", "pear", "banana"]

    array1.push("strawberry")

    console.log(array1)
}


// fruity()   //["apple", "pear", "banana", "strawberry"]


const longestWords = (str) => {

    let strArr = str.split(' ')
    let check = strArr[0].length>strArr[1].length ? strArr[0] : strArr[1]

    console.log(check)
    return check
}

// longestWords("Bob Hoskins")

const ageCalc = (birthYear, futureYear) => {

    let year = futureYear - birthYear

    console.log(`I will be either ${year-1} or ${year} in ${futureYear}`)
}

// ageCalc(1985,2050)



const circleProp = (radius) => {

        let c = Math.PI * 2 * radius

        console.log(`The circumference is ${c}`)

        let area = Math.PI * Math.pow(radius,2)

        console.log(`The area is ${area}`)

        /******  rounding */

        let roundArea = Math.floor(area)
        let roundCircum = Math.floor(c)

        console.log(`The circumference is ${roundCircum}\nThe area is ${roundArea}`)
}


// circleProp(9)

const tempConv = (tempCel) =>{

    let tempF = tempCel*(9/5)+32

    console.log(`${tempCel}C tempreature in Farehiet is ${tempF}F`)
    
}

// tempConv(32)


const sumNum = (numArr) => {
   
let count=0

    for(i=numArr[0];i<numArr[1]+1;i++){
        count=count+i
    }
    console.log(count)

    return count
}

// sumNum([1,5])




const diffBetwArr = (arr1,arr2) =>{
    
let newArr = []

    for(i=0; i<arr1.length; i++){
        
        for(k=0; k<arr2.length; k++){
            if(arr1[i] === arr2[k]){
                newArr.push(arr2[k])
            }
        }

    }

    console.log(newArr)

}


diffBetwArr(['dan', 'ben'],['dan', 'andy', 'ben', 'stuart'])



// const diffBetwArrV2 = (myArr1, myArr2)=> {

//     let result = myArr2.filter(word => word==myArr1[0])

//     console.log(result)
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// }


// diffBetwArr2(['dan', 'ben'],['dan', 'andy', 'ben', 'stuart'])


module.exports = {
    codeNation,
    fruity,
    sumNum

}
