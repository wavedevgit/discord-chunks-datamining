/** Chunk was on 69788 **/
/** chunk id: 986849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk261168 = require("./261168.js");
let i = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, do MMMM y",
      long: "do MMMM y",
      medium: "do MMM y",
      short: "dd.MM.y"
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
      full: "{{date}} 'um' {{time}}",
      long: "{{date}} 'um' {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}