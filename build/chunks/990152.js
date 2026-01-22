/** Chunk was on 86440 **/
/** chunk id: 990152, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk385987 = require("./385987.js");
let o = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, d. MMMM yyyy",
      long: "d. MMMM yyyy",
      medium: "d. M. yyyy",
      short: "dd.MM.yyyy"
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
      full: "{{date}} 'v' {{time}}",
      long: "{{date}} 'v' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}