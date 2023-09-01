<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";
import { ActionTypes } from "@/store/actions";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },
  methods: {
    async fecthNewsItems() {
      const data = await this.$store.dispatch(ActionTypes.FETCH_NEWS);
      this.newsItems = data;
    },
  },
  created() {
    this.fecthNewsItems();
  },
});
</script>

<style></style>
