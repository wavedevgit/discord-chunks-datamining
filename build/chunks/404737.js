/** Chunk was on 78607 **/
/** chunk id: 404737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk261168 = require("./261168.js");
let i = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "y년 M월 d일 EEEE",
      long: "y년 M월 d일",
      medium: "y.MM.dd",
      short: "y.MM.dd"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "a H시 mm분 ss초 zzzz",
      long: "a H:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}