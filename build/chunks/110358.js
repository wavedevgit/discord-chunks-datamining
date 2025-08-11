/** Chunk was on 51477 **/
/** chunk id: 110358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk261168 = require("./261168.js");
let r = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "EEEE d MMMM y",
      long: "d MMMM y",
      medium: "d MMM y",
      short: "y-MM-dd"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "'kl'. HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, Chunk261168.Z)({
    formats: {
      full: "{{date}} 'kl.' {{time}}",
      long: "{{date}} 'kl.' {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}