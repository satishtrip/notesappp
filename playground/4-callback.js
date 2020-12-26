setTimeout(() => {
    console.log("2 secs are up")
}, 2000)

const names = ['Andrew','Satrish','Triapthi']
const shortNames = names.filter((name) =>{
    return name.length <=4
})
const geocode = (address, callback) =>{
    const data = {
        latitutde :0,
        longtitufe: 0
    }
    return data 
}

const data = geocode('Satish')
console.log(data)
const add = (a, b, callBack)=> {
    setTimeout(()=> {
        callBack(a+b)

    },2000)
}


add(1, 4 ,(sum) => { 
    console.log(sum)
})