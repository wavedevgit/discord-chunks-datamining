/** Chunk was on 8894 **/
/** chunk id: 926418, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk385987 = require("./385987.js");
let o = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, d 'de' MMMM 'de' y",
      long: "d 'de' MMMM 'de' y",
      medium: "d MMM y",
      short: "dd/MM/y"
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
      full: "{{date}} 'a las' {{time}}",
      long: "{{date}} 'a las' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}