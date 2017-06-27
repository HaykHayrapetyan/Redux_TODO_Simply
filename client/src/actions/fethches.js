const getReqConf = (method, body) => {
        let reqConf = {
            method,
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            }
        }

        if (body) {
            reqConf.body = JSON.stringify(body);
        }

        return reqConf;
    }
    

export const getApi = ()=>{    
    
    const reqUrl = "http://localhost:3030/api/todos";
    const reqConf = getReqConf('GET');
    console.log('did mount')
     return fetch(reqUrl, reqConf).then(result => {
        return result.json()
        }) 
       
}       


export const postApi = (todo) => {
    const reqUrl = "http://localhost:3030/api/todos";
    const reqConf = getReqConf("POST", todo);
        
    return fetch(reqUrl, reqConf)
    .then(result => {
        return result.json()
    }) 
                     
    .catch(function(error) {
        alert(error.toString())
    });  
}


export function deleteApi(id){
    const reqUrl = "http://localhost:3030/api/todos/"+id;
    const reqConf = getReqConf("DELETE");
    return fetch(reqUrl, reqConf)
    .then(result => {
        return result.json()
    }) 
    .catch(function(error) {
        alert(error.toString())
    });   
    
}

export function updateApi(id, title){
    const reqUrl = "http://localhost:3030/api/todos/"+id;
    const reqConf = getReqConf("PUT", {title});
    return fetch(reqUrl, reqConf)
    .then(result => {
        return result.json()
    }) 
    .catch(function(error) {
        console.log(error.toString())
    });         
}