/** Chunk was on 33156 **/
/** chunk id: 98195, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk261168 = require("./261168.js");
let r = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "y年M月d日EEEE",
      long: "y年M月d日",
      medium: "y/MM/dd",
      short: "y/MM/dd"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "H時mm分ss秒 zzzz",
      long: "H:mm:ss z",
      medium: "H:mm:ss",
      short: "H:mm"
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