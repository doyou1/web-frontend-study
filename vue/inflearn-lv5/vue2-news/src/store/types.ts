import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";
import { Actions } from "./actions";
import { Getters } from "./getters";

type NewsMutations = {
  // commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
  //   key: K,
  //   payload?: P,
  //   options?: CommitOptions
  // ): ReturnType<Mutations[K]>;
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type NewsActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

type NewsGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type NewsStore = Omit<
  Store<RootState>,
  "commit" | "dispatch" | "getters"
> &
  NewsMutations &
  NewsActions &
  NewsGetters;

// <Omit 설명>
// const person = {
//     name: "a",
//     age: 10,
//     skill: "js"
// }
// // skill property는 제거한다.
// const josh = Omit<person, 'skill'>
// josh = {
//     name: "a",
//     age: 10,
// }
