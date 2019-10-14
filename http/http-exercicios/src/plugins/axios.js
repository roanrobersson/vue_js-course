import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-49284.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promisse.reject(error))

        Vue.prototype.$http.interceptors.response.use( res => {
            // const array = []
            // for(let chave in res.data) {
            //     array.push({ id: chave, ...res.date[chave]})
            // }

            // res.data = array
            return res
        }, error => Promisse.reject(error))
    }
    
})
