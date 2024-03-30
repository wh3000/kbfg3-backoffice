//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useAccountStore = defineStore('account', {
  state: () => ({
    site:{
      siteNm:'',
      siteCd:'',
    },
    account: {        // 로그인정보
      userId: '',
      userNm: '',
      companyCode:'',
    },
    menuList: [],     // 메뉴목록
    manageBoards: [], // 관리게시판목록
    commonCodes:[],
  }),
  
  actions: {
    async setAccount(account) {
      this.account = account
    },
    async clearAccount() {
      this.account = {
        userId: '',
        userNm: '',
        companyCode:'',
      }
    },
    async setManageBoards(manageBoards) {
      this.manageBoards = manageBoards
    },
    
    async setCommonCodes(commonCodes){
      this.commonCodes = commonCodes
    },
  }
})
