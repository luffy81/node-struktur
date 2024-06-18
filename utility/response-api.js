module.exports = (metaData = {} , data = []) => {
    const {code = 500, message = "", res_code = "0001"} = metaData;
    let ret = {}; 
    if (code == 200) {
        ret = {
            response: data,
            metaData: {
                message: "Ok",
                code: code,
                response_code: "0000",
            }
        }   
    } else {
        ret = {
            response: data,
            metaData: {
                message: message,
                code: code,
                response_code: res_code,
            }
        }
    }

    return ret;
};
