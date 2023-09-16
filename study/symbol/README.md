# Symbol

## Symbol 이란?

- ECMAScript 2015(ES6)에 생겼다.
- 인스턴스를 생성하는 new Symbol로 사용할 수 없다.
- Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.

## TypeScript를 사용하는 경우

- tsconfig.json 파일에서 compilerOptions 안에서 "lib": ["ES2015", "DOM"] 를 설정해 줘야 Symbol 함수를 사용할 수 있다.
