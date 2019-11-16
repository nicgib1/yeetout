let YeetoutApiService = class YeetoutApiService{
    constructor(){
        this.apiProtocol = process.env.REACT_APP_API_PROTOCOL || 'http';
        this.apiHost = process.env.REACT_APP_API_HOST || 'localhost:8000';
    }

    get apiLocation(){
        return `${this.apiProtocol}://${this.apiHost}`;
    }

    login() {
        return `${this.apiLocation}/login/`;
    }

    register(){
        return `${this.apiLocation}/register/`;
    }
};

const yeetoutApiService = new YeetoutApiService();
export default yeetoutApiService;