/** Chunk was on 11876 **/
/** chunk id: 160620, original params: o,e,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk385987 = require("./385987.js");
let i = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, d. MMMM y.",
      long: "d. MMMM y.",
      medium: "d. MMM y.",
      short: "dd. MM. y."
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "HH:mm:ss (zzzz)",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} 'u' {{time}}",
      long: "{{date}} 'u' {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}