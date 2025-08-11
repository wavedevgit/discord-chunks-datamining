/** Chunk was on 64248 **/
/** chunk id: 993099, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk261168 = require("./261168.js");
let i = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "d MMMM y EEEE",
      long: "d MMMM y",
      medium: "d MMM y",
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
      full: "{{date}} 'saat' {{time}}",
      long: "{{date}} 'saat' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}