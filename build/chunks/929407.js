/** Chunk was on 71161 **/
/** chunk id: 929407, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => n
});
var Chunk385987 = require("./385987.js");
let n = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, d MMMM y",
      long: "d MMMM y",
      medium: "d MMM y",
      short: "d/M/yy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} - {{time}}",
      long: "{{date}} - {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}