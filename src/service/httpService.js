const axios = require('axios').default;
// TODO: const url = "htt "

export function getMethod(data) {
    console.log(data.path);

    return axios.get('http://localhost:3000/'+data.path);
    // return axios({
    //     method:"GET",
    //     url:'http://localhost:3000/'+data.path,
    //     data:data.field
    //     }); 
}