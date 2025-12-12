/** Chunk was on 41023 **/
/** chunk id: 774623, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk261168 = require("./261168.js");
let a = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "วันEEEEที่ do MMMM y",
      long: "do MMMM y",
      medium: "d MMM y",
      short: "dd/MM/yyyy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "H:mm:ss น. zzzz",
      long: "H:mm:ss น. z",
      medium: "H:mm:ss น.",
      short: "H:mm น."
    },
    defaultWidth: "medium"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      full: "{{date}} 'เวลา' {{time}}",
      long: "{{date}} 'เวลา' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    },
    defaultWidth: "full"
  })
}