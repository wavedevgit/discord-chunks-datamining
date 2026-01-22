/** Chunk was on 51131 **/
/** chunk id: 39517, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk385987 = require("./385987.js");
let r = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "y. MMMM d., EEEE",
      long: "y. MMMM d.",
      medium: "y. MMM d.",
      short: "y. MM. dd."
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "H:mm:ss zzzz",
      long: "H:mm:ss z",
      medium: "H:mm:ss",
      short: "H:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}