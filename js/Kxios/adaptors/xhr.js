export default (configs) => {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onload = ()=>{
            resolve({
                readyState:xhr.readyState,
                statusText:xhr.statusText,
                status:xhr.status,
                text:xhr.responseText,
                data:configs.transformResponse(xhr.responseText)
            })
        }
        xhr.open('get', configs.baseURL + configs.url, true)
        xhr.send()
    })
}