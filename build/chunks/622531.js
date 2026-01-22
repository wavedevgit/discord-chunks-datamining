/** Chunk was on 34581 **/
/** chunk id: 622531, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  A: () => n
});
var Chunk385987 = require("./385987.js");
let n = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, d 'de' MMMM 'de' y",
      long: "d 'de' MMMM 'de' y",
      medium: "d MMM y",
      short: "dd/MM/yyyy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} '\xe0s' {{time}}",
      long: "{{date}} '\xe0s' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}