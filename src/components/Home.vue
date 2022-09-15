<script setup lang="ts">
import { ref } from 'vue'
import Title from './Title.vue';
import WordDialog from './WordDialog.vue';
import {
  Reading,
  Delete,
  FolderAdd,
} from '@element-plus/icons-vue'

const wordDialogVisible = ref(false)
</script>

<template>
  <el-row justify="space-between" align="middle" style="height: 44px" class="box">
    <Title>NAUGHTY GOD</Title>
    <p>Sign in</p>
  </el-row>
  <el-space direction="vertical" style="padding: 32px">
    <el-button :icon="FolderAdd" circle class="icon" plain @click="wordDialogVisible = true" />
    <el-button :icon="Delete" class="icon" circle />
    <router-link to="/management">
      <el-button :icon="Reading" class="icon" circle />
    </router-link>
  </el-space>
  <WordDialog :visible="wordDialogVisible" @close="wordDialogVisible = false" />
  <el-button class="create-btn" round plain size="large">CREATE</el-button>
</template>
<style scoped>
.create-btn {
  width: 210px;
  position: fixed;
  bottom: 96px;
  left: 50%;
  transform: translateX(-105px);
  color: var(--main-color);
  background-color: #fff;
  border-color: #fff;
}

.icon {
  color: var(--main-color);
  background-color: #fff;
  border-color: var(--main-color);
}
</style>