/** Chunk was on 78055 **/
/** chunk id: 154993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk385987 = require("./385987.js");
let i = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, do MMMM y",
      long: "do MMMM y",
      medium: "do MMM y",
      short: "dd.MM.y"
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
      full: "{{date}} 'um' {{time}}",
      long: "{{date}} 'um' {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}