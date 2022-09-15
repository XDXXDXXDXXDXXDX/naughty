<script setup lang="ts">
import Title from './Title.vue';
import {
  Reading,
  Delete,
  FolderAdd,
} from '@element-plus/icons-vue'
</script>
<template>
  <el-row justify="space-between" align="middle" style="height: 44px" class="box">
    <Title>NAUGHTY GOD</Title>
    <p>Sign in</p>
  </el-row>
  <el-space direction="vertical" style="padding: 32px">
    <el-button :icon="FolderAdd" circle color="var(--main-color)" plain />
    <el-button :icon="Delete" circle />
    <el-button :icon="Reading" circle />
  </el-space>
  <el-button class="create-btn" round color="var(--main-color)" plain size="large">CREATE</el-button>
</template>
<style scoped>
.create-btn {
  width: 210px;
  position: fixed;
  bottom: 96px;
  left: 50%;
  transform: translateX(-105px);
}

</style>