/** Chunk was on 62985 **/
/** chunk id: 357219, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
var Chunk261168 = require("./261168.js");
let n = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, d MMMM y",
      long: "d MMMM y",
      medium: "d MMM y",
      short: "d/M/yy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      full: "{{date}} - {{time}}",
      long: "{{date}} - {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}