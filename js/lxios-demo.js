import kxios from './Kxios/index.js'
// console.log(kxios)

kxios.defaults.transformResponse = function(data){
    return JSON.parse(data)
}

kxios.interceptors.request.use(function (config) {
    console.log(0)
    return config;
}, function (error) {
    console.log(2)
    return Promise.reject(error);
});


kxios.interceptors.response.use(function (res) {
    console.log('response')
    return res;
}, function (error) {
    console.log(2)
    return Promise.reject(error);
});

kxios.get('/',{
    baseURL:'http://localhost:8888',
    headers:{
        token:'ey53-4545-8ui8-h5u6'
    }
}).then(res => {
    console.log(res)
});
kxios.get('/data',{
    baseURL:'http://localhost:8888',
    headers:{
        token:'ey53-4545-8ui8-h5u6'
    }
}).then(res => {
    console.log(res)
});