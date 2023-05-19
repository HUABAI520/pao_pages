<template>
  <van-nav-bar
      :title="pageTitle"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>

  </van-nav-bar>
  <div id="content">
    <router-view/>
  </div>

  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍页</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="usr">个人</van-tabbar-item>
  </van-tabbar>


</template>

<script setup>

import {showToast} from 'vant';
import {useRouter} from "vue-router";
import {ref} from "vue";
const router = useRouter();
const onClickLeft = () => history.back();
const onClickRight = () => {
  router.push('/search')
};
// const active = ref("index");
const pageTitle = ref('标题');
const onChange = (name) => {
  switch (name) {
    case 'index':
      pageTitle.value = '主页';
      break;
    case 'team':
      pageTitle.value = '队伍页';
      break;
    case 'usr':
      pageTitle.value = '个人信息';
      break;
    default:
      pageTitle.value = '标题';
  }
};
</script>

<style scoped>

</style>