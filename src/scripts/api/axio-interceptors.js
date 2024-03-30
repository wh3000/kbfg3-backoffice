import axios from "axios";
import { useAuthStore } from "../../stores/auth";
//import { useRouter } from "vue-router";

//let router = null

export function setInterceptors(instance) {
    instance.interceptors.request.use(
        (config) => {

            const authStore = useAuthStore()

            const onlyToken = sessionStorage.getItem('token');

            if (authStore.token) {
                config['headers'] = {
                    Authorization: `Bearer ${authStore.token}`,
                    accessToken : onlyToken,
                    siteCd: import.meta.env.VITE_SITE,

                }
            }
            return config;
        },
        (error) => {
            // Do something with request error
            return Promise.reject(error);
        },
    );

    // Add a response interceptor
    instance.interceptors.response.use(
        function (response) {
            // accesstoken이 전달되면 store 갱신
            if (response.headers.accesstoken) {
                const accesstoken = response.headers.accesstoken
                const store = useAuthStore()
                store.setToken(accesstoken)
            }

            if(response.data.resultCode===401){
                window.alert("로그인 시간이 경과하여 재로그인이 필요합니다.\n로그인페이지로 이동합니다.")
                window.location = "/logout"
            }else if(response.data.resultCode===406){
                window.alert(response.data.resultMessage)
                window.location = "/logout"
            }else if(response.data.resultCode===500){
                console.log(response.data.resultMessage);
            }
            if(response.data.resultCode!==200){
            }
            return response;
        },
        function (error) {
            if (!error.response) {
                alert("네크워크나 서버에 문제가 발생하였습니다.")
            }
            else if (error.response.status === 401) {
                window.alert("로그인 시간이 경과하여 재로그인이 필요합니다.\n로그인페이지로 이동합니다.")
                window.location = "/logout"
            }
            else if (error.response.status === 500) {
                console.log('error.response.error',error.response.error)
                if(error.code == 'ERR_BAD_RESPONSE'){
                    alert("네크워크나 서버에 문제가 발생하였습니다.")
                }
            }else{
                console.log('기타에러',error.response.error)
            }

            return Promise.reject(error);
        },
    );
    return instance;
}

function createInstanceWithAuth() {
    const instance = axios.create();
    return setInterceptors(instance);
}

export const axiosWithInterceptors = createInstanceWithAuth();
