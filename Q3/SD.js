exports.SDcalculcate = (req) => {
    var result = {}
    for (let i = 0; i < req.length ; i++) {
        var {is_sample , sample} = req[i]
        if (is_sample == true){
            sample = sample.map(v => Number(v))
            var sd = SD(sample)
            result[`Index ${i}`] = Math.round(sd * 100)/100
        }
    }
    var convertedResult = ""
    for (const [key, value] of Object.entries(result)){
        convertedResult += `${key}: ${value}, `;
      };
    return convertedResult.slice(0,convertedResult.length -2)
}


function SD(arr) {
    
    let mean = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0) / arr.length;

    arr = arr.map((k) => {
        return (k - mean) ** 2
    });
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return Math.sqrt(sum / (arr.length-1) )
}