### vue/inflearn-lv5
* [reference link](https://www.inflearn.com/course/vue-ts) 
* result

### Vue.js에서 타입스크립트를 적용하는 방법
1. 서비스를 처음 구축할 때 부터 타입스크립트를 사용한다. (첫번째 프로젝트, vue-todo)
2. 기존에 이미 구현된 서비스에 타입스크립트를 점진적으로 적용한다. (두번째 프로젝트, vue-advanced)

### v-model을 풀어서 구현하는 방식의 장점
* v-model이 더 편하니까 이거 쓰면 되는거죠?
    * 한국어, 중국어, 일본어를 입력값으로 했을 때, 완벽한 지원이 되지 않는 부분이 있음.

```javascript
<TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
<TodoInput :item="todoPassword" @input="updateTodoPassword" @add="addTodoItem" />
```
* 각각의 유효성 검사 등 좀 더 복잡한 구현이 추가로 필요한 경우, 유용하다.

> node 18 version 일 경우, "@vue/cli-service": "~5.0.0", 으로 npm install 해야 실행이 가능
* vue add typescript 를 통한 typescript 도입은 "점진적인" 도입을 어렵게 할 수 있다. (vue add typescript은 추천 X)

### Vue 프로젝트에 타입스크립트를 점진적으로 적용하는 방법
1. Vue + Typescript 프로젝트 생성
2. 기존 서비스 코드와 라이브러리를 새 프로젝트에 이동
3. 기본적인 빌드 에러 해결
4. 타입스크립트의 혜택을 볼 수 있는 주요 파일들 위주로 .js -> .ts로 변환하며 적용

> 팁: 타입 체킹 정도는 덜 엄격한 방식에서 점점 엄격한 방식으로 적용하는 것을 추천