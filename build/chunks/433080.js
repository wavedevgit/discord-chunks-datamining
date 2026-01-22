/** Chunk was on 82840 **/
/** chunk id: 433080, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk385987 = require("./385987.js");
let i = {
  date: (0, Chunk385987.A)({
    formats: {
      full: "y'年'M'月'd'日' EEEE",
      long: "y'年'M'月'd'日'",
      medium: "yyyy-MM-dd",
      short: "yy-MM-dd"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk385987.A)({
    formats: {
      full: "zzzz a h:mm:ss",
      long: "z a h:mm:ss",
      medium: "a h:mm:ss",
      short: "a h:mm"
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