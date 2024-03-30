import { defineStore } from "pinia";

export const useCommonStore = defineStore('common', {
    state: () => ({
      siteNm:'',
      siteCd:'',
    }),
    
    actions: {
        async setSite(siteNm, siteCd){
            this.siteNm = siteNm
            this.siteCd = siteCd
        }
    }
}
)