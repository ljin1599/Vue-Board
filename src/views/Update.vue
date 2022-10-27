<script setup lang="ts">
    import { BoardListStore } from "@/stores/list";
    import { storeToRefs } from "pinia";
    import { onMounted, ref } from "vue";
    import { defineProps } from "vue";

    const store:any = BoardListStore() // 저장소의 상태, 작업 가능
    const { ListAll } = storeToRefs(store) // 구조분해할당 , 

    const { readboard } = store // store에서 함수 받아오기

    interface Props {
        id: String,
        title: String,
        content: String
    }

    const update = defineProps<Props>()

    const id = ref(update.id)    // id 값에 update.id 값 가져오기, id을 받아야 수정하고 id에 맞게 수정이 가능함
    const title = ref(update.title)  // title 값에 update.title 값 가져오기
    const content = ref(update.content)  // content 값에 update.content 값 가져오기

    onMounted(() => {  //구성 요소가 마운트된 후 호출될 콜백을 등록 
        readboard()
    })

    function addlist(list:any) {
    store.updateboard(list);
    console.log(list.id, list.title, list.content)
    }

</script>

<template>
    <el-input
        v-model="title"
        maxlength="20"
        show-word-limit
        type="text" />  <!-- 받는 최대 문자 길이 20제한 -->

  <!-- input창 사이 공간 간격 -->
  <div style="margin: 20px 0"></div>

  <el-input
        v-model="content"
        maxlength="50"
        show-word-limit
        type="textarea" />  <!-- 받는 최대 문자 길이 50제한 -->

  <!-- input창과 버튼 사이 공간 간격 -->
  <div style="margin: 20px 0"></div>

    <el-row class="mb-4">
        <el-col :span="12" :offset="6"> <!-- 버튼 가운데 정렬 -->
            <!-- 버튼을 클릭했을때 addlsit 함수에 id,title,content 값을 넘기고 router를 이용해 read 페이지로 이동한다 -->
            <router-link to="/read"><el-button type="primary" plain class="button" @click="addlist({id, title, content})"> 등록</el-button></router-link>
        </el-col>
    </el-row>
</template>