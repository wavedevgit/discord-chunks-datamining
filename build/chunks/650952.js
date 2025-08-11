/** Chunk was on 71953 **/
/** chunk id: 650952, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk261168 = require("./261168.js");
let r = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE, dd MMMM yyyy",
      long: "dd MMMM yyyy",
      medium: "dd MMM yyyy",
      short: "dd/MM/yyyy"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "H:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      any: "{{date}} {{time}}"
    },
    defaultWidth: "any"
  })
}