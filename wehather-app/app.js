const request = require('request')
const { receiveMessageOnPort } = require('worker_threads')

const url = 'http://api.weatherstack.com/current?access_key=e2efd33baf806bf7eb7db020cf752e29&query=New%20York&units=f'

request({url:url,json:true},(error, response)=> {
    console.log(" It is  currently " +  response.body.current.temperature + " farenheit out there ")

    // const data = JSON.parse(response.body)
    // console.log(data.current)

})

const geocodeURL = ' https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F0aXNoNTEyIiwiYSI6ImNrajQ0M3MydjBoMmwycG52dW5rbDd3bnYifQ.9qNLY_qjLj-tMHgnEqHs6w'
request({ url: geocodeURL,json:true}, (error,response) =>{
    const latitutde = response.body.features[0].context[0].id
    console.log(latitutde)

})