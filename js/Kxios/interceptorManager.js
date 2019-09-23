export default class InterceptorManager{
    constructor(){
        this.handlers = []
    }
    use( resolvedHandler, rejectedHandler){
        this.handlers.push({
            resolvedHandler,
            rejectedHandler
        })
    }
}