/** Chunk was on 67816 **/
/** chunk id: 520356, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk261168 = require("./261168.js");
let a = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, 'ng\xe0y' d MMMM 'năm' y",
      long: "'ng\xe0y' d MMMM 'năm' y",
      medium: "d MMM 'năm' y",
      short: "dd/MM/y"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
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