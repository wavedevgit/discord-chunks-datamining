/** Chunk was on 4670 **/
/** chunk id: 931852, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  z: () => u
});
var Chunk735438 = require("./735438.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let u = (0, Chunk419954.Hn)(Chunk780964.X.MOBILE_NOTIFICATION_DELAY, {
  useTitle: () => a.intl.string(a.t["8rHeOr"]),
  useSubtitle: () => a.intl.string(a.t["eJE6+J"]),
  fieldLayout: "horizontal-responsive",
  useValue: Chunk253932.cU.useSetting,
  setValue: Chunk253932.cU.updateSetting,
  useOptions: () => n.range(1, 11).map(e => ({
    id: e.toString(),
    value: 60 * e,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: e
    })
  }))
})