/** Chunk was on 19310 **/
/** chunk id: 305954, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  A: () => t
});
var Chunk385987 = require("./385987.js");
let t = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, do MMMM y",
      long: "do MMMM y",
      medium: "do MMM y",
      short: "dd.MM.y"
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
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}