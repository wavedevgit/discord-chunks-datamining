/** Chunk was on 5950 **/
/** chunk id: 669400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk261168 = require("./261168.js");
let i = {
  date: (0, Chunk261168.Z)({
    formats: {
      full: "y'年'M'月'd'日' EEEE",
      long: "y'年'M'月'd'日'",
      medium: "yyyy-MM-dd",
      short: "yy-MM-dd"
    },
    defaultWidth: "full"
  }),
  time: (0, Chunk261168.Z)({
    formats: {
      full: "zzzz a h:mm:ss",
      long: "z a h:mm:ss",
      medium: "a h:mm:ss",
      short: "a h:mm"
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