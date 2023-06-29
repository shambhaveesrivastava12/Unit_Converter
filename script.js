
const mToft = 3.281
const lTogal = 0.26417
const kgTolb = 2.2046
const celTofah = 0.5556
const acToMile = 640


const Units = {
    ft: "feet",
    m:  "meters",
    l:  "liters",
    gal:"gallons",
    kg: "kilograms",
    lb: "pounds",
    cel: "celsius",
    fah: "fahrenheit",
    ac: "acres",
    mile: "miles",

}
const convertEl = document.getElementById("convertThis")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
const tempResult = document.getElementById("temp-result")
const areaResult = document.getElementById("area-result")

let requestNum = 0

convertBtn.addEventListener("click", function(){
    requestNum = convertEl.value
    lengthResult.textContent = generateText(Units.m, Units.ft)
    volumeResult.textContent = generateText(Units.l, Units.gal)
    massResult.textContent = generateText(Units.kg, Units.lb)
    tempResult.textContent = generateText(Units.cel, Units.fah)
    areaResult.textContent = generateText(Units.ac, Units.mile)
})

function generateText(metric, imperial){

    let metricInfo = `${requestNum} ${metric} = ${convert(requestNum, metric, imperial)} ${imperial}`
    let imperialInfo = `${requestNum} ${imperial} = ${convert(requestNum, imperial, metric)} ${metric}`
    return metricInfo + " | " + imperialInfo
}


function convert(num, from, to){
    let result = 0
    if (from === "feet" && to === "meters"){
        result = roundThis(num / mToft, 3)
    }
    if (from === "meters" && to === "feet"){
        result = roundThis(num * mToft, 3)
    }
    if (from === "gallons" && to === "liters"){
        result = roundThis(num / lTogal, 3)
    }
    if (from === "liters" && to === "gallons"){
        result = roundThis(num * lTogal, 3)
    }
    if (from === "pounds" && to === "kilograms"){
        result = roundThis(num / kgTolb, 3)
    }
    if (from === "kilograms" && to === "pounds"){
        result = roundThis(num * kgTolb, 3)
    }
    if (from === "celsius" && to === "fahrenheit"){
        res = num * 1.8 + 32
            result = roundThis(res, 3);
        }
    if (from === "fahrenheit" && to === "celsius"){
        res = (num - 32) * celTofah
            result = roundThis(res, 3)
        }
    if (from === "acres" && to === "miles"){
            result = roundThis(num / acToMile, 3)
        }
    if (from === "miles" && to === "acres"){
            result = roundThis(num * acToMile, 3)
        }

    return result
}


function roundThis(num, places){
    const bigResult = num
    //shift all decimals but 1 over to integer side
    let workingNum = Number(bigResult + `e${places}`)
    //round off the one remaining decimal to an integer
    workingNum = Math.round(workingNum)
    //shift all decimals back over
    workingNum = workingNum/(Math.pow(10,places))
    return workingNum
}