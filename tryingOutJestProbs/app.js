const codeNation = () =>{
    let codenation = "codenation"

    let codeN = codenation.split("").sort()

    console.log(codeN)
}




const splicy = () => {

    let benArr = "Benjamin".split("")
    let spliIt = benArr.splice(0,3)

    console.log(spliIt)
}



export.modulues = {
    codeNation,
    splicy
}