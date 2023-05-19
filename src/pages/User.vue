<template>
  <van-cell title="头像" is-link to="/user/edit"  >
    <img style="height: 50px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="昵称" is-link  :value="user.username" @click="toEdit('username','昵称',user.username)"/>
  <van-cell title="账号"  :value="user.userAccount" />
  <van-cell title="性别" is-link  :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="电话" is-link  :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link  :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="星球编号"  :value="user.planetCode" />
  <van-cell title="注册时间"   :value="user.createTime.toISOString()" />
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: 'huabai',
  userAccount: 'huabai',
  avatarUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2d11c9f6-f96d-42c5-8fa7-f10af0b0ea03%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687074887&t=a9d7548c11f642531f84a2a99e5fcbfb',
  gender: '男',
  phone: 'huabai',
  email: 'huabai',
  planetCode: '1234',
  // tags: ['huabaiu','huabnai'],
  createTime: new Date()
}
const router = useRouter();
const  toEdit = (editKey: string,editName:string,currentValue: string) =>{
  router.push({
    path: 'user/edit',
    query: {
      editKey,
      editName,
      currentValue
    },
  })
}
</script>

<style scoped>

</style>