<script setup lang="ts">
    import { BoardListStore } from "@/stores/list";
    import { ref } from "vue";
    import { defineProps } from "vue";

    const store:any = BoardListStore() // 저장소의 상태, 작업 가능

    const { deleteboard } = store   // store에서 함수 받아오기

    // 일반적으로 props는 부모 컴포넌트에서 자식 컴포넌트로 단방향 흐름이기 때문에 읽기만 가능하고 수정 사용은 불가
    interface Props {
        id: number,
        title: string,
        content: string        
    }

    const detail = defineProps<Props>()

    // 다른 변수에 주입해서 사용
    const copyid = ref(detail.id)   
    const copytitle = ref(detail.title)
    const copycontent = ref(detail.content)
    
    console.log("detailprops")
</script>
<template>
    <div class="table">
        <h4 class="text">제목
            <td class="line"><div></div></td>
        </h4>
        <p class="text">{{ title }}</p> <!-- 탬플릿 내에서 사용할 때는 props호출 없이 사용 가능 -->
        
        <h4 class="text">내용
            <td class="line"><div></div></td>
        </h4>
        <p class="text">{{ content }}</p>
        
        <!-- 수정 버튼 클릭시 router를 이용해 param 값을 props로 전달, Update 페이지로 이동 -->
        <router-link :to="{name:'Update', params: {id: copyid, title: copytitle, content: copycontent}}"><el-button type="primary" plain class="button"> 수정</el-button></router-link>
        <!-- 클릭시 deleteboard함수로 id값을 넘기고, 수정 버튼 클릭시 router를 이용해 read 페이지로 이동 -->
        <router-link to="/read"><el-button type="primary" plain class="button" @click="deleteboard(copyid)"> 삭제</el-button></router-link>
    </div>
</template>

<style>
    .table {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }

    .text {
        text-align: left;   /* 왼쪽 정렬 */
    }

    .line div { /* 선 속성 */
        width:1000px;
        height: 0;
        border-top: 1px solid var(--el-border-color);
    }


</style>
