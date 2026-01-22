/** Chunk was on 6651 **/
/** chunk id: 873821, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => n
});
var Chunk385987 = require("./385987.js");
let n = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, dd MMMM yyyy",
      long: "dd MMMM yyyy",
      medium: "dd MMM yyyy",
      short: "dd/MM/yyyy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "H:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      any: "{{date}} {{time}}"
    },
    defaultWidth: "any"
  })
}