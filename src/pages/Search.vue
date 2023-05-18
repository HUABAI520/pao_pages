<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索的标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <van-tag :show="true" closeable size="medium" type="primary" @close="close">
    标签
  </van-tag>
  <van-divider content-position="left">选择标签</van-divider>




</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import {useRouter} from "vue-router";
const router = useRouter();
const searchText = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => {
  router.push('/')
}

</script>

<style scoped>

</style>