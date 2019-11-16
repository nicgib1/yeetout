import axios from 'axios';
import yeetoutApiService from './yeetout.api.service';

let YeetoutService = class YeetoutService{
    login(email, password){
        return new Promise((resolve, reject)=>{
            axios.post(yeetoutApiService.login(),{
                username: email,
                password: password
            }).then(response=>{resolve (response.data)})
            .catch(error => reject(error));
        })
    }
}

const yeetoutService = new YeetoutService();
export default yeetoutService;