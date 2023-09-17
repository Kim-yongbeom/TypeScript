var _a;
console.log(Symbol('foo') === Symbol("foo"));
var sym = Symbol();
// obj 객체의 sym에 자유롭게 접근가능한 코드
// const obj = {
//     sym: "value",
// }
// obj["sym"]
// symbol 타입을 사용해서 Symbol로 정의한 값이 들어와야만 결과 보여줌
var obj = (_a = {},
    _a[sym] = "value",
    _a);
obj[sym];
