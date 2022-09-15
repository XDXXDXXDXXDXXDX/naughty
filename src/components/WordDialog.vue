<script lang="ts" setup>
import { ref } from 'vue'
import Title from './Title.vue'
import {
  Refresh
} from '@element-plus/icons-vue'
defineProps<{ visible: boolean }>()
const emit = defineEmits(['close'])
const handleClose = () => {
  emit('close')
}

const type = ref('PureArt')
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<template>
  <el-dialog v-model="visible" :before-close="handleClose" :show-close="false">
    <template #header>
      <el-row justify="space-between">
        <Title>Powder</Title>
        <el-icon color="var(--main-color)" :size="24">
          <Refresh />
        </el-icon>
      </el-row>
    </template>

    <el-radio-group v-model="type" size="small" style="margin-bottom: 16px">
      <el-radio-button label="PureArt" />
      <el-radio-button label="Accurate" />
      <el-radio-button label="Limit" />
    </el-radio-group>
    <el-space direction="vertical" :size="16" style="display: flex" alignment="start">
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-space>


    <template #footer>
      <el-row justify="space-between">
        <el-button @click="handleClose" class="btn" size="large">Cancel</el-button>
        <el-button type="primary" @click="handleClose" class="btn" size="large">Submit</el-button>
      </el-row>
    </template>
  </el-dialog>
</template>

<style scoped>
.btn {
  flex: 1;
}

.el-button+.el-button {
  margin-left: 50px;
}
</style>