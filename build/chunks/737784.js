/** Chunk was on 23768 **/
/** chunk id: 737784, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  A: () => n
});
var Chunk385987 = require("./385987.js");
let n = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "d MMMM y EEEE",
      long: "d MMMM y",
      medium: "d MMM y",
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
      full: "{{date}} 'saat' {{time}}",
      long: "{{date}} 'saat' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}