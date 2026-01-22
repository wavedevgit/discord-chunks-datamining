/** Chunk was on 31670 **/
/** chunk id: 33050, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk385987 = require("./385987.js");
let a = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "วันEEEEที่ do MMMM y",
      long: "do MMMM y",
      medium: "d MMM y",
      short: "dd/MM/yyyy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "H:mm:ss น. zzzz",
      long: "H:mm:ss น. z",
      medium: "H:mm:ss น.",
      short: "H:mm น."
    },
    defaultWidth: "medium"
  }),
  dateTime: (0, Chunk385987.A)({
    formats: {
      full: "{{date}} 'เวลา' {{time}}",
      long: "{{date}} 'เวลา' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}