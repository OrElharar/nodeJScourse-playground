const fs = require("fs")

const dataBuffer = fs.readFileSync("1-json.json");
const dataJDON = dataBuffer.toString();
const data = JSON.parse(dataJDON);
data.name = "Or";
const updatedDataJSON = JSON.stringify(data);
fs.writeFileSync("1-JSON.json", updatedDataJSON);
