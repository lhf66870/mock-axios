import { deepCopy, mergeConfig } from './utils'
import InterceptorManager from './InterceptorManager'    
class Kxios {
    constructor(config){
        this.defaults = deepCopy(config)
        this.interceptors = {
           request: new InterceptorManager(),
           response: new InterceptorManager()
        }
    }
    // 发送get请求
    get( url, config ){
        config.url = url
        // 对get传入的参数与对象默认配置进行整合
        let configs =  mergeConfig(this.defaults, config)
        // 创建成功状态的promise对象
        let promise = Promise.resolve(configs);
        this.interceptors.request.handlers.forEach( handlers => {
            promise = promise.then(
                handlers.resolvedHandler,
                handlers.rejectedHandler
            );
        })
        // 形成 promise 任务链
        // undefined：成功状态，并不会走到这一步
        // this.dispatch执行后会返回一个新的 promise 对象
        // promise = 去掉等于return 出去的是上面 声明的 promise
        // 调用的.then 需要接到 dispatch -> new Promise ，所以进行覆盖
        promise = promise.then(this.dispatch, undefined)

        // 响应拦截器
        this.interceptors.response.handlers.forEach( handlers => {
            promise = promise.then(
                handlers.resolvedHandler,
                handlers.rejectedHandler
            );
        })
        // 此处决定调用 是否可以用 then 
        return promise
    }
    dispatch( configs ){
        let adaptor = configs.adaptor(configs);
        return adaptor;
    }
}

export default Kxios;



