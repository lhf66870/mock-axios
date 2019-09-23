import xhr from './adaptors/xhr'
import nodeHttp from './adaptors/nodeHttp'
// 默认实例化配置
export default{
    url:'',
    baseURL:'',
    method:'get',
    headers: {
        'content-type': 'application/json'
    },
    adaptor(configs){
        if( typeof window === 'object'){
            return xhr(configs)
        }else{
            return nodeHttp(configs)
        }
    },
    transformResponse: (data) => {
        return data
    }
}