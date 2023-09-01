import Vue from "vue";
import { NewsStore } from "@/store/types";

// NOTE: `node_module/vuex/types.vue.d.ts` 파일을 삭제해야 아래 타입이 정상 추론
// - node_modules내의 파일을 수정하는게 아닌 깃을 통해서도 공유되도록 프로젝트 레벨로 설정
// `node_module/vuex/types.vue.d.ts`의 커스텀 파일로 생각해도 좋을 듯
declare module "vue/types/vue" {
  interface Vue {
    $store: NewsStore;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: NewsStore;
  }
}
