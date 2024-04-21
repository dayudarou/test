<template>
<el-pull-refresh :on-refresh="handleRefresh">
    <div v-for="item in list" :key="item">
        {{ item }}
    </div>
</el-pull-refresh>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
import { ref } from 'vue'

const list = ref(['item1','item2','item3'])

const handleRefresh = () => {
    setTimeout(()=> {
        list.value = ['New item1','New item2','New item3']
    },2000)
}

</script>