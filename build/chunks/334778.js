/** Chunk was on 81843 **/
/** chunk id: 334778, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
var Chunk261168 = require("./261168.js");
let n = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "y. MMMM d., EEEE",
      long: "y. MMMM d.",
      medium: "y. MMM d.",
      short: "y. MM. dd."
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
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}