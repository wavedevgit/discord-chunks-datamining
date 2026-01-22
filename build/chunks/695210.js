/** Chunk was on 61670 **/
/** chunk id: 695210, original params: i,n,e (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk385987 = require("./385987.js");
let a = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, do MMMM y 'р.'",
      long: "do MMMM y 'р.'",
      medium: "d MMM y 'р.'",
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
      full: "{{date}} 'о' {{time}}",
      long: "{{date}} 'о' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}