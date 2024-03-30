<script setup>
import { reactive, toRefs, watch, onMounted } from 'vue';
import { useAccountStore } from '@/stores/account';
//import { useRouter } from 'vue-router/composables';
import {useRouter} from 'vue-router'
// import menus from '@/data/menus'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

    const store = useAccountStore();
    const router = useRouter();
    // TODO header로 이동
    const logOut = async () => {
      const logOutResult = await AccountService.logOut();
      if (logOutResult.resultCode === 200) {
        store.clearAccount();
        alert('로그아웃 되었습니다.');
        router.push({ path: '/login' });
      }
    };

    const state = reactive({
      site: import.meta.env.VITE_SITE,
      hasAuthBoards: [], // 관리가능한 게시판목록
      boardMenus:[],
      isKbfgUser:false,  // 지주유저여부
    });

    const currentRoute = reactive({ router: router });
    watch(currentRoute.router, (value) => {
      //console.log('currentRoute', value);
    });

    const account = toRefs(store).account;
    watch(account, (value) => {
      state.hasAuthBoards = value.hasAuthBoards;
      if(state.hasAuthBoards?.length>0){
        state.boardMenus = menus
          .filter(menu=>menu.name==='게시판관리')[0].childrens
          .filter(child=>child.bulbdId && state.hasAuthBoards.includes(child.bulbdId));
      }

      // 지주홈유저여부 업데이트
      state.isKbfgUser = value.affcomCd==='KBFG';
    });

    // onMounted(async () => {

    // });

    // return {
    //   state,
    //   store,
    //   router,
    //   logOut
    // };


</script>

<template>
    <!-- <aside class="list-area" v-if="store.account.mngCd === 'MASTER'"> -->
    <aside class="list-area">
        <div>
            SideNav 작업중
        </div>
        <h2 class="list-tit">공통관리</h2>
    <ul class="categoty-list">
      <li class="on">
        <router-link to="/manage/common-code/codes">공통코드관리</router-link>
      </li>
    </ul>

    </aside>
</template>
<style>

</style>