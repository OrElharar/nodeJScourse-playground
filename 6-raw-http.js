const https = require("https");

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Amsterdam.json?access_token=pk.eyJ1Ijoib3JlbGhhcmFyIiwiYSI6ImNrcTZheWptejBmb3gydW1tcm44dmo2OXoifQ.vJK7rB3Sazhk9z9przYciQ&limit=1`
const request = https.request(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk.toString();

    })
    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})

request.on("error", (error) => {
    console.log("error", error)
})
request.end();
