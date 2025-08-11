/** Chunk was on 27381 **/
/** chunk id: 717982, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
var Chunk261168 = require("./261168.js");
let n = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "eeee d. MMMM y",
      long: "d. MMMM y",
      medium: "d. MMM y",
      short: "d.M.y"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "HH.mm.ss zzzz",
      long: "HH.mm.ss z",
      medium: "HH.mm.ss",
      short: "HH.mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      full: "{{date}} 'klo' {{time}}",
      long: "{{date}} 'klo' {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}