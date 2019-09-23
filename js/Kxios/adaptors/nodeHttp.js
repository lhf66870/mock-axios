var http=require("http");

export default function nodeHttp(configs) {
    return new Promise( (resolve,reject) => {
        const postData = ''
        let options = {
            url: configs.url,
            method: configs.method,
            headers: {
                "content-type": "application/json",
            }
        }

        const req = http.request(options, (res) => {
            console.log(res)
            res.setEncoding('utf8')

            let chunks = [],size = 0;
            res.on('data', chunk => {
                chunks.push(chunk)
                size += chunk.length
                // 响应主体
                console.log(chunk)
            })
            res.on('end', ()=>{
                // 响应中已无数据
                resolve(chunks.join(''))
            })

        })
        req.on('error', (err) => {
            console.log('报错啦：' + err.message)
        })
        // 将请求写入请求主体
        req.write(postData)
        req.end;
    })
}