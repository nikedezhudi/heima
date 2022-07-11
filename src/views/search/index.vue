<template>
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <SearchHistory />
  </div>
</template>

<script>
import SearchHistory from "@/views/search/components/search-history";
export default {
  name: "SearchPage",
  components: {
    SearchHistory,
  },
  props: {},
  data() {
    return {
      searchText: "",
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    onSearch() {},
    onCancel() {},
  },
};
</script>

<style scoped></style>
