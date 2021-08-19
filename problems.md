# async/await 를 쓰면 `regeneratorRuntime is not defined` 라는 에러를 만난다.

https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav

를 참고해보니

- Automatically requires @babel/runtime/regenerator when you use generators/async functions (toggleable with the regenerator option).

- Can use core-js for helpers if necessary instead of assuming it will be polyfilled by the user (toggleable with the corejs option)

- Automatically removes the inline Babel helpers and uses the module @babel/runtime/helpers instead (toggleable with the helpers option).

이렇게 세가지 일을 해주는 babel-plugin을 설정해주어야 했다.
