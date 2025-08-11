/** Chunk was on 62629 **/
/** chunk id: 863852, original params: i,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk261168 = require("./261168.js");
let a = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, d MMMM y 'г.'",
      long: "d MMMM y 'г.'",
      medium: "d MMM y 'г.'",
      short: "dd.MM.y"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "H:mm:ss zzzz",
      long: "H:mm:ss z",
      medium: "H:mm:ss",
      short: "H:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      any: "{{date}}, {{time}}"
    },
    defaultWidth: "any"
  })
}