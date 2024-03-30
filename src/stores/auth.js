import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
      token: '',
      hasRoles:[],
      userId:'',
    }),
    
    actions: {
      async setToken(token) {
        this.token = token
                // '{"sub":"master@abc.com","roles":["ROLE_HR","ROLE_3","ROLE_MASTER"],"userId":"master@abc.com","iat":1679892672,"exp":1679893272}'
        const tokenInfo = JSON.parse(atob(token.split('.')[1]))
        this.hasRoles = tokenInfo.roles
        this.userId = tokenInfo.userId 
      },
      clearToken(){
        this.token = ''
        this.hasRoles = []
        this.userId = ''
      }
    }
  })
  