import axios from 'axios'
// console.log(axios)


axios.get('http://localhost:8888').then(res => {
    console.log(res)
})