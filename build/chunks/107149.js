/** Chunk was on 49739 **/
/** chunk id: 107149, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk385987 = require("./385987.js");
let r = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "EEEE 'den' d. MMMM y",
      long: "d. MMMM y",
      medium: "d. MMM y",
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
      full: "{{date}} 'kl'. {{time}}",
      long: "{{date}} 'kl'. {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}