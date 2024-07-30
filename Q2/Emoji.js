exports.emojiConvert = (req) => {
    let store = {":smile:" : ":)" , ':sad:' : ':(' , ':laugh:' : 'XD', ':cry:' : ':’('	, ':kidding:' : ':P' , ':wow:' : ':o' }
    let result = ""
    let temp = ""
    for (v of req){
        while (temp) {
            if (v !== ":"){
                temp += v
                break
            }else {
                temp += v
                result += store[temp] ? store[temp] : "-"     
                break           
            }
        }
        if (v !== ":" & !temp){
            result += v
        }
        else if (!temp) {
            temp += v
        }
        else if (temp.length > 1 && temp[temp.length-1] == ':') temp = ""  //additional for consider if emoji > 1 icon ex. I love coding :smile: :cry:
        

    }
    return result
}