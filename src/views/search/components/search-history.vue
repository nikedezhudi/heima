<template>
  <div class="search-history">
    <van-cell title="搜索历史">
      <template #default>
        <van-tag class="btn" type="danger">全部删除</van-tag>
        <van-tag class="btn" type="success">完成</van-tag>
        <van-icon name="delete" />
      </template>
    </van-cell>

    <van-cell title="我是历史记录">
      <template #default>
        <van-icon name="clear" />
      </template>
    </van-cell>
    <van-cell title="我是历史记录">
      <template #default>
        <van-icon name="clear" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.btn {
  margin-right: 10px;
}
</style>
