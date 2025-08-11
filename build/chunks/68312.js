/** Chunk was on 86200 **/
/** chunk id: 68312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk261168 = require("./261168.js");
let r = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE 'den' d. MMMM y",
      long: "d. MMMM y",
      medium: "d. MMM y",
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
      full: "{{date}} 'kl'. {{time}}",
      long: "{{date}} 'kl'. {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}