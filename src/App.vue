<script setup lang="ts">
  import {
    Document,
    Menu as IconMenu,
    Location,
  } from '@element-plus/icons-vue'

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">

      </el-header>
      <el-container>
        <el-aside width="200px">
        <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <router-link to="/home"><span>Home</span></router-link>
          </template>
            <router-link to="/create"><el-menu-item index="1-1">Create</el-menu-item></router-link>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
            <router-link to="/read"><span>Read</span></router-link>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>About</span>
        </el-menu-item>
        <el-menu-item disabled>
        </el-menu-item>
        <el-menu-item disabled>
        </el-menu-item>
        <el-menu-item disabled>
        </el-menu-item>


      </el-menu>
    </el-col>
  </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style >
.el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.el-menu {
  border-right: none;
}
.el-main {
  padding: 0;
}
.el-aside {
  color: var(--el-text-color-primary);
}
.el-menu {
  border-right: none;
}
.el-main {
  padding: 0px;
}
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
