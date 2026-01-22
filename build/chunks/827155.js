/** Chunk was on 43045 **/
/** chunk id: 827155, original params: e,a,i (module,exports,require) **/
require.d(exports, {
  A: () => n
});
var Chunk385987 = require("./385987.js");
let n = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE d MMMM y",
      long: "d MMMM y",
      medium: "d MMM y",
      short: "dd/MM/y"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
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