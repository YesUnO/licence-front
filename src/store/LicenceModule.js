import Vue from 'vue';
import config from '@/Configuration.js'
/*eslint-disable*/
let path = config.api + 'licence';
export default{
    namespaced:true,
    actions:{
        saveEntry(context,payload){
            return new Promise(function (resolve,reject){
                Vue.axios.post(path,{name:payload.name,xml:payload.xml}).then(function(response){
                    if (response.data == null) {
                        reject(new Error('no results'));
                    }
                    else{
                        resolve(response);
                    }
                },()=>{
                    reject(new Error('no results'));
                })
            })
        },

        getAll(){
            return new Promise(function (resolve,reject){
                Vue.axios.get(path).then(function(response){
                    if (response.data == null) {
                        reject(new Error('no results'));
                    }
                    else{
                        resolve(response);
                    }
                },()=>{
                    reject(new Error('no results'));
                })
            })
        },

        getDetail(context,payload){
            return new Promise(function (resolve,reject){
                Vue.axios.get(path+'/detail/'+payload.id).then(function(response){
                    if (response.data == null) {
                        reject(new Error('no results'));
                    }
                    else{
                        resolve(response);
                    }
                },()=>{
                    reject(new Error('no results'));
                })
            })
        },
    }
}