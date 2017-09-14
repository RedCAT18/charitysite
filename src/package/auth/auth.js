

//토큰 인증
export default function(Vue){

    Vue.auth={
        getToken(){
            return localStorage.getItem('token');
        },
        setToken(token){
            localStorage.setItem('token', token);
        },
        destroyToken(){
            localStorage.removeItem('token');
        },
        isAuthenticated(){
            return !!this.getToken();
            // if(this.getToken()){
            //     return true;
            // } else {
            //     return false;
            // }
        }
    };

    //for global call
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: ()=> {
                return Vue.auth;
            }
        }
    })
}