const https = require('https');
const zlib = require("zlib");
const requestSummary = async (event) => {
    
    const response = await new Promise((resolve, reject) => {
        const req = https.get("https://api.kawalcovid19.id/v1/api/case/summary", function(res) {
       
        var buffer = [];
        var gunzip = zlib.createGunzip();            
        res.pipe(gunzip);

        gunzip.on('data', function(data) {
            buffer.push(data.toString())

        }).on("end", function() {
            console.log("buffer "+buffer.join(""))
            resolve(buffer.join(""))

        }).on("error", function(e) {
            console.log(e)
            reject(e)
        })
    }).on('error', function(e) {
        console.log(e)
        reject(e)
    });

    });
    return response;
};

module.exports.requestSummary = requestSummary