/** Chunk was on 19893 **/
/** chunk id: 664515, original params: i,n,e (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk385987 = require("./385987.js");
let a = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, d MMMM y 'г.'",
      long: "d MMMM y 'г.'",
      medium: "d MMM y 'г.'",
      short: "dd.MM.y"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "H:mm:ss zzzz",
      long: "H:mm:ss z",
      medium: "H:mm:ss",
      short: "H:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      any: "{{date}}, {{time}}"
    },
    defaultWidth: "any"
  })
}