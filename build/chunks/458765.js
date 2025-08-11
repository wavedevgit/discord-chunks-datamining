/** Chunk was on 28990 **/
/** chunk id: 458765, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk261168 = require("./261168.js");
let r = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, d. MMMM yyyy",
      long: "d. MMMM yyyy",
      medium: "d. M. yyyy",
      short: "dd.MM.yyyy"
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
      full: "{{date}} 'v' {{time}}",
      long: "{{date}} 'v' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}