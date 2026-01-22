/** Chunk was on 21269 **/
/** chunk id: 561571, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk385987 = require("./385987.js");
let a = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE, 'ng\xe0y' d MMMM 'năm' y",
      long: "'ng\xe0y' d MMMM 'năm' y",
      medium: "d MMM 'năm' y",
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
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}