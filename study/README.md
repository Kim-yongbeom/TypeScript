# TypeScript 스터디

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
