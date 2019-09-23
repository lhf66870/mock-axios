class Kxios {
    // 发送get请求
    get( url ){
    return new Promise()
        let xhr = new XMLHttpRequest()
        xhr.onload = ()=>{
               console.log(xhr)
                // 返回体数据进行二次包装
                resolve({
                    readyState:xhr.readyState,
                    statusText:xhr.statusText,
                    status:xhr.status,
                    data:xhr.responseText
                })
            }
            xhr.open('get', url, true)
            xhr.send()

    }
}
export default Kxios;
