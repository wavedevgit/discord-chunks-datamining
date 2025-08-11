/** Chunk was on 94912 **/
/** chunk id: 78786, original params: o,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk261168 = require("./261168.js");
let i = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, d. MMMM y.",
      long: "d. MMMM y.",
      medium: "d. MMM y.",
      short: "dd. MM. y."
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "HH:mm:ss (zzzz)",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      full: "{{date}} 'u' {{time}}",
      long: "{{date}} 'u' {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}