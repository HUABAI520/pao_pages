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
  <div v-if="activeIds.length==0">请选择标签</div>
  <van-row :gutter="15" style="padding: 0 15px">
    <van-col v-for="tag in activeIds">
      <van-tag :show="true" closeable size="small" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";


const searchText = ref('');
const originTagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
      { text: '大三', id: '大三' },
      { text: '大四', id: '大四' },
      { text: '研一', id: '研一' },
      { text: '研二', id: '研二' },
      { text: '研三', id: '研三' },
      { text: '博士', id: '博士' },
      { text: '博士后', id: '博士后' },
    ],
  },
  {
    text: '专业',
    children: [
      { text: '软工', id: '软工' },
      { text: '大数据', id: '大数据' },
      { text: '计算机', id: '计算机' },
      { text: '英语', id: '英语' },
      { text: '通信', id: '通信' },
      { text: '网安', id: '网安' },
      { text: '区块链', id: '区块链' },
      { text: '自动化', id: '自动化' },
      { text: '电科', id: '电科' },
    ],
  },
];

// 标签列表
const tagList = ref(originTagList);

const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const filteredChildren = parentTag.children.filter(item => item.text.includes(val));
    return { ...parentTag, children: filteredChildren };
  });
};

const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
  activeIds.value=[];
}

//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


//移除标签
const close = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}
</script>

<style scoped>

</style>