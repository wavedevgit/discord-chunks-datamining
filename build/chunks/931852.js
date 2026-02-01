/** Chunk was on 30485 **/
/** chunk id: 931852, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  z: () => a
});
var Chunk735438 = require("./735438.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let a = (0, Chunk419954.Hn)(Chunk780964.X.MOBILE_NOTIFICATION_DELAY, {
  useTitle: () => u.intl.string(u.t["8rHeOr"]),
  useSubtitle: () => u.intl.string(u.t["eJE6+J"]),
  fieldLayout: "horizontal-responsive",
  useValue: Chunk253932.cU.useSetting,
  setValue: Chunk253932.cU.updateSetting,
  useOptions: () => n.range(1, 11).map(t => ({
    id: t.toString(),
    value: 60 * t,
    label: u.intl.formatToPlainString(u.t.iXLF9W, {
      minutes: t
    })
  }))
})