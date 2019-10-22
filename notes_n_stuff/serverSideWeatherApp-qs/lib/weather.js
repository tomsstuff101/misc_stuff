const request = require("request")
const { promisify } = require("util")

const promisifiedRequest = promisify(request)

const token = "52679ca5ce13a04d4268223e9ea7d587"

const getWeather = async locationData => {
  try {
    let data = await promisifiedRequest({
      url: `https://api.darksky.net/forecast/${token}/${locationData.lng},${locationData.lat}`,
      json: true
    })

    return data.body.currently
  } catch {
    console.log("oops an error has occured")
  }
}

module.exports = {
  getWeather
}
