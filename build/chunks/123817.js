/** Chunk was on 94895 **/
/** chunk id: 123817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk385987 = require("./385987.js");
let a = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, do MMMM, y",
      long: "do MMMM, y",
      medium: "d MMM, y",
      short: "dd/MM/yyyy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} 'को' {{time}}",
      long: "{{date}} 'को' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}