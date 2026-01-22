/** Chunk was on 95091 **/
/** chunk id: 500069, original params: i,a,e (module,exports,require) **/
require.d(exports, {
  A: () => t
});
var Chunk385987 = require("./385987.js");
let t = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, d MMMM yyyy",
      long: "d MMMM yyyy",
      medium: "d MMM yyyy",
      short: "dd.MM.yyyy"
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
      full: "{{date}} 'la' {{time}}",
      long: "{{date}} 'la' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}