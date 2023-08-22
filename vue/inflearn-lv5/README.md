### vue/inflearn-lv5
* [reference link](https://www.inflearn.com/course/vue-ts) 
* result

### Vue.js에서 타입스크립트를 적용하는 방법
1. 서비스를 처음 구축할 때 부터 타입스크립트를 사용한다.
2. 기존에 이미 구현된 서비스에 타입스크립트를 점진적으로 적용한다.

### v-model을 풀어서 구현하는 방식의 장점
* v-model이 더 편하니까 이거 쓰면 되는거죠?
    * 한국어, 중국어, 일본어를 입력값으로 했을 때, 완벽한 지원이 되지 않는 부분이 있음.

```javascript
<TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
<TodoInput :item="todoPassword" @input="updateTodoPassword" @add="addTodoItem" />
```
* 각각의 유효성 검사 등 좀 더 복잡한 구현이 추가로 필요한 경우, 유용하다.