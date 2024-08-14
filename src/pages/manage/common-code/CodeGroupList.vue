<script setup>
  import CommonService from "@/services/CommonService.js";
  import {onMounted, reactive} from "vue";

defineProps({
  msg: {
    type: String,
    required: true
  }
})

  const state =reactive({
    result:{
      list:[],
    }
  })

  const getCodeGroupList = async () => {
    const result = await CommonService.getCodeGroupList({})
    state.result.list = result.result.codeGroups
    console.log(state.result.list)

  }
  onMounted(()=>{
    getCodeGroupList()
  })


</script>

<template>
  <div class="cont-area">
    <div class="cont-inner">
      <div class="cont-header">
        <h3>Code Groups</h3>
        <div class="search-box">
          <div class="tit-row">
            <span class="type">구분</span>
          </div>
        </div>
        <div>
          <select name="codeGroups">
            <option v-for="item in state.result.list">{{ item.cdNm }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>