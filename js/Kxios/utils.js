// 深拷贝
let deepCopy =  ( source ) => {
    let target = Array.isArray(source) ? [] : {}
    for(let key in source){
        // 判断是否是私有属性
        if(!source.hasOwnProperty(key)) return

        if(typeof source[key] === 'object'){
            target[key] = deepCopy(source[key])
        }else{
            target[key] = source[key]
        }   
    }
    return target
}

// 配置覆盖 / 合并
let mergeConfig =  ( obj1, obj2 ) => {
    let target = deepCopy(obj1);
    let source = deepCopy(obj2);
    return Object.keys(source).reduce( (t, k) => {
        if ( ['url','baseURL', 'method'].includes(k) ) {
            t[k] = source[k];
        }
        if (['headers'].includes(k)) {
            t[k] = Object.assign({}, source[k], t[k]);
        }
        return t;
    }, target );
}

export  { deepCopy, mergeConfig }