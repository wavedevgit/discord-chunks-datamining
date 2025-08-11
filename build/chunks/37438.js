/** Chunk was on 40096 **/
/** chunk id: 37438, original params: e,i,a (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
var Chunk261168 = require("./261168.js");
let n = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE d MMMM y",
      long: "d MMMM y",
      medium: "d MMM y",
      short: "dd/MM/y"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      full: "{{date}} '\xe0' {{time}}",
      long: "{{date}} '\xe0' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}