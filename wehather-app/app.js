const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const { receiveMessageOnPort } = require('worker_threads')

// const url = 'http://api.weatherstack.com/current?access_key=e2efd33baf806bf7eb7db020cf752e29&query=New%20York&units=f'

// request({url:url,json:true},(error, response)=> {
//     console.log(" It is  currently " +  response.body.current.temperature + " farenheit out there ")

//     // const data = JSON.parse(response.body)
//     // console.log(data.current)

// })
// const geocode = (address,callback) => {

//     const url = ' https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2F0aXNoNTEyIiwiYSI6ImNrajQ0M3MydjBoMmwycG52dW5rbDd3bnYifQ.9qNLY_qjLj-tMHgnEqHs6w'
//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }
geocode('Washington DC',(error , data)=>{
    console.log('Error',error)
    console.log("Data",data)
})
forecast('-75.7088 , 44.1545',(error , data)=>{
    console.log('Error',error)
    console.log("Data",data)
})
