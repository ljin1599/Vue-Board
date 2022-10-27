<script setup lang="ts">
  import { ref } from "vue";
  import { BoardListStore } from "@/stores/list"; // 저장소

  const store = BoardListStore()  // 저장소 상태, 작업 가능 

  const title = ref('')
  const content = ref('')

  function addlist(list:any) { // input 창의 제목, 내용을 store안에 addboard 함수에 값을 넘겨준다.
    store.addboard(list);
    console.log(list.title, list.content)
  }
</script>

<template>
  <el-input
      v-model="title"
      maxlength="20" 
      placeholder="제목을 입력하세요"
      show-word-limit
      type="text" />  <!-- 받는 최대 문자 길이 20제한 -->

  <!-- input창과 창 사이 공간 간격 -->
  <div style="margin: 20px 0"></div> 
  
  <el-input
    v-model="content"
    maxlength="50"
    placeholder="내용을 입력하세요"
    show-word-limit
    type="textarea" />  <!-- 받는 최대 문자 길이 50제한 -->

  <!-- input창과 버튼 사이 공간 간격 -->
  <div style="margin: 20px 0"></div>

  <el-row class="mb-4">
    <el-col :span="12" :offset="6"> <!-- 버튼 위치 가운데 정렬 -->
      <!-- 버튼을 클릭했을때 addlsit 함수에 title,content 값을 넘기고 router를 이용해 read 페이지로 이동한다 -->
      <router-link to="/read"><el-button type="primary" plain class="button" @click="addlist({title, content})"> 등록</el-button></router-link>
    </el-col>
  </el-row>
</template>
