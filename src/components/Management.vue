<script setup lang="ts">
import { ref } from 'vue'
import Title from './Title.vue';
import { Search } from '@element-plus/icons-vue'

const type = ref('构图属性')
const checkList = ref(['Check all'])
const searchVal = ref('')
</script>
  
<template>
  <el-row justify="space-between" align="middle" style="height: 44px" class="box">
    <Title>MANAGE MODE</Title>
    <router-link to="/">
      <p>Back</p>
    </router-link>
  </el-row>
  <div style="padding: 16px">
    <el-radio-group v-model="type" style="width: 100%;">
      <el-radio-button label="构图属性" />
      <el-radio-button label="修饰属性" />
      <el-radio-button label="限制属性" />
    </el-radio-group>
  </div>
  <div class="box">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="Check all" />
      <el-checkbox label="Scene" />
      <el-checkbox label="Character" />
      <el-checkbox label="Object" />
      <el-checkbox label="Condition" />
      <el-checkbox label="Style" />
    </el-checkbox-group>
    <el-divider style="margin: 16px 0px;" />
    <el-input v-model="searchVal" class="w-50 m-2" size="small" placeholder="Input search text" :suffix-icon="Search" />
  </div>


  <div class="add-box">
    <el-button class="add-btn" round plain size="large">ADDING</el-button>
  </div>
</template>
<style scoped>
.add-box {
  width: 100%;
  height: 152px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(253, 43, 129, 0) 0%, #FD2B81 43.23%);
}

.add-btn {
  margin-top: 38px;
  width: 210px;
  color: var(--main-color);
  background-color: #fff;
  border-color: #fff;
}
</style>