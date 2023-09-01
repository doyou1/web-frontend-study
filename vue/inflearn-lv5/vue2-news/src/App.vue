<template>
  <div id="app">
    <spinner-view :loading="loading"></spinner-view>
    <tool-bar></tool-bar>
    <transition name="routing-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ToolBar from "./components/ToolBar.vue";
import SpinnerView from "./components/SpinnerView.vue";
import bus from "./utils/bus";
import { MutationTypes } from "./store/mutations";
import { ActionTypes } from "./store/actions";

export default Vue.extend({
  components: {
    ToolBar,
    SpinnerView,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
    },
  },
  async created() {
    // 굳이 getters를 통해 연결할 필요는 없음
    // this.$store.state.news;

    // this.$store.commit(MutationTypes.SET_NEWS, 10);
    bus.$on("on:progress", this.onProgress);
    bus.$on("off:progress", this.offProgress);
  },
});
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active,
.routing-fade-leave-active {
  transition: opacity 0.3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
