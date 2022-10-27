<script lang="ts" setup>
  import { computed, ref } from "vue";  // computed는 상시 감시중이다가 data가 바뀜에 따라 자동으로 값이 바꿔서 렌더 된다
  import { BoardListStore } from "@/stores/list";
  import { storeToRefs } from "pinia";

  import { onMounted } from "vue";

  const store:any = BoardListStore() // 저장소의 상태, 작업 가능
  const { ListAll } = storeToRefs(store) // 구조분해할당
  const { readboard } = store // store에서 함수 받아오기

  const viewpage = 5  // 테이블에 표시 될 게시물 수

  const selectpage:any = ref(1) // pager 클릭시 page 값을 불러오는데 첫 페이지는 받지 못하기 때문에  첫 번째 페이지인 1을 기본값으로 설정 //ref = 반응형 상태 정의 

  // 페이지 수 계산 
  const totalpage = computed(() => {  // 전체 게시물 / 한 페이지 표시되는 게시물 수
    let page = (Math.floor((ListAll.value.length - 1) / viewpage) + 1) * 10;  // Math.floor는 소수값이 존재할 대 소수값을 버리는 역할
    return page
  })
  console.log(totalpage.value)

  // 게시물 번호
  const indexNum= computed(() => {
    const index = (selectpage.value-1) * viewpage + 1
    return index
  })

// 게시물 표시
  const tableData = computed(() => {
      const start = viewpage * (selectpage.value - 1),
                end = start + viewpage;
                console.log(start, end);
      return ListAll.value.slice(start, end);  // 배열의 일부분을 반환(첫 번째 전달인자가 지정하는 위치부터 두 번재 전달인자가 지정하는 위치를 제외한 그 사이 배열 값)
  })

  onMounted(() => { //구성 요소가 마운트된 후 호출될 콜백을 등록, 구성 요소가 초기 렌더링을 완료하고 코드 실행
    readboard()
  })

</script>

<template>
  <el-table :data="tableData" stripe style="width: 100%" >
    <el-table-column label="Num" type="index" :index="indexNum" width="150"/> <!-- 게시물 번호 오름차순 -->
    <el-table-column label="Title" prop="title" />  <!-- 게시물 제목 -->
    
    <el-table-column align="right"> <!-- deatil 버튼 위치 오른쪽 -->
      <template #default="ListAll">
        <!-- detail 버튼 클릭시 router를 이용해 param 값을 props로 전달, Detail 페이지로 이동 -->
        <router-link  :to="{name: 'Detail', params: {  id: ListAll.row.id, title: ListAll.row.title, content: ListAll.row.content }}">
          <el-button size="small">Detail</el-button>
        </router-link>
      </template>
    </el-table-column>
  </el-table>
  
  <div class="btn">
    <!-- elementplus의 layout 를 사용해서 이전페이지, 페이지번호, 다음페이지를 구성, pager의 페이지 번호를 눌렀을때 current-change를 사용해서 페이지 변화 -->
    <el-pagination layout="prev, pager, next, jumper" :total=totalpage v-model:currentPage="selectpage"  />
  </div>

</template>

<style>
.btn {
  width:300px;
  margin:  auto;
}
</style>





<!--  element-plus  쓰기전
<table class="table">
    <tbody>
      <tr>
        <td class="text">번호</td>
        <td class="text1">제목</td>
      </tr>
      <tr>
        <td class="line">
        <div class="line2"/>
      </td>
      </tr>
      <tr v-for="(item, i) of ListAll" :key="i" >
        <td class="text" >{{ i + 1 }} 
          <td class="line">
            <div class="line1"/>
          </td>
        </td>
        
        <router-link  to=/detail class="link2"><td class="text" @click="detailboard(item.id)">{{item.title}}</td></router-link>
      </tr>
      <tr>
        <div>
          <button @click="pageboard(1)">1</button>
          <button @click="pageboard(2)">2</button>
  </div>
  </tr>
    </tbody>
  </table>

  <style>
  .table {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .table .line1 {
    width: 515%;
  }

  .table .line2 {
    width: 500%;
  }

  .td {
    text-align: center
  }
</style>
-->