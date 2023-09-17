# Symbol

## Symbol 이란?

- ECMAScript 2015(ES6)에 생겼다.
- 인스턴스를 생성하는 new Symbol로 사용할 수 없다.
- Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.

## TypeScript를 사용하는 경우

- tsconfig.json 파일에서 compilerOptions 안에서 "lib": ["ES2015", "DOM"] 를 설정해 줘야 Symbol 함수를 사용할 수 있다.

## Symbol을 왜 어떻게 사용할까?

- 원시 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어 준다.
- 주로 접근을 제어하는데 쓰는 경우가 많다.
