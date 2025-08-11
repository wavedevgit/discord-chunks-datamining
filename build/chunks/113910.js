/** Chunk was on 4267 **/
/** chunk id: 113910, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk261168 = require("./261168.js");
let o = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, d 'de' MMMM 'de' y",
      long: "d 'de' MMMM 'de' y",
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
      full: "{{date}} 'a las' {{time}}",
      long: "{{date}} 'a las' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}