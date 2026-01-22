/** Chunk was on 2294 **/
/** chunk id: 146671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk385987 = require("./385987.js");
let r = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "y年M月d日EEEE",
      long: "y年M月d日",
      medium: "y/MM/dd",
      short: "y/MM/dd"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "H時mm分ss秒 zzzz",
      long: "H:mm:ss z",
      medium: "H:mm:ss",
      short: "H:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}