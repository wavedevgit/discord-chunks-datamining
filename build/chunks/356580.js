/** Chunk was on 43353 **/
/** chunk id: 356580, original params: i,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk261168 = require("./261168.js");
let a = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, do MMMM y 'р.'",
      long: "do MMMM y 'р.'",
      medium: "d MMM y 'р.'",
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
      full: "{{date}} 'о' {{time}}",
      long: "{{date}} 'о' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}