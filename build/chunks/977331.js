/** Chunk was on 18629 **/
/** chunk id: 977331, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk385987 = require("./385987.js");
let u = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "eeee d. MMMM y",
      long: "d. MMMM y",
      medium: "d. MMM y",
      short: "d.M.y"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "HH.mm.ss zzzz",
      long: "HH.mm.ss z",
      medium: "HH.mm.ss",
      short: "HH.mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} 'klo' {{time}}",
      long: "{{date}} 'klo' {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}