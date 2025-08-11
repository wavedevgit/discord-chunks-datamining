/** Chunk was on 22042 **/
/** chunk id: 350666, original params: i,a,e (module,exports,require) **/
require.d(exports, {
  Z: () => t
});
var Chunk261168 = require("./261168.js");
let t = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, d MMMM yyyy",
      long: "d MMMM yyyy",
      medium: "d MMM yyyy",
      short: "dd.MM.yyyy"
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
      full: "{{date}} 'la' {{time}}",
      long: "{{date}} 'la' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}