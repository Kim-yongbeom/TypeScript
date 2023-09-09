# TypeScript 스터디

## TypeScript vs JavaScript

- TypeScript 는 Static Types
- JavaScript 는 Dynamic Types

## JavaScript의 자료형 (기본 타입) - TypeScript와 동일

- 원시 타입
  - Boolean
  - Number
  - String
  - Null
  - Undefined
  - Symbol (ECMAScript 6 에 추가)
- 원시 타입은 아니지만 JavaSciprt의 타입
  - Object: 키, 값으로 구성된 Property집합
  - Array: 여러개의 데이터를 저장할 수 있는 자료 구조 (JS 에서는 Array도 객체이다.)
  - Function: 하나의 고유한 목적의 작업을 수행하도록 설계된 독립적인 블록 (JS 에서는 Function도 객체이다.)

## TypeScript의 추가된 타입

- Any, Void, Never, UnKnown
- Enum
- Tuple (object 형)

## TypeScript 전역 설치

- npm i typescript -g

## TypeScript 명령어

- tsc --init (컴파일할 폴더에 생성하기)
- tsc '컴파일할 파일명' (하나의 파일만 컴파일 할 때 사용)
- tsc (전부 컴파일)
- tsc -w (파일 수정할 때마다 컴파일)

## TypeScript 시작!! (전역 설치로 진행)

- 폴더 생성
- test.ts 생성

```
let a: string;

a = 'Kim'

console.log(a);

function num (b: number) {
    console.log(b);
}

num(1)

이 코드에서 a 뒤에 ': string' 이 부분은 Type Annotation (타입 어노테이션) 이라고 한다.
만약 타입 어노테이션을 number로 바꾸면 a에 넣어줄 값을 number 타입으로 바꾸어 주어야한다.
function의 인자에도 어노테이션을 넣어줄 수 있다.
```
