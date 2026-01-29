/** Chunk was on 4670 **/
/** chunk id: 333659, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk955572 = require("./955572.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk614651 = require("./614651.jsx"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.Qx)(Chunk780964.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
  useTitle: () => u.intl.string(u.t.nKRoPv),
  useSubtitle: () => u.intl.string(u.t.QntEEG),
  useOptions: () => [{
    name: u.intl.string(u.t.Jqj4cZ),
    value: a.IE.COZY
  }, {
    name: u.intl.string(u.t["1JNcPS"]),
    value: a.IE.COMPACT
  }],
  useValue: () => s.hH.useSetting() ? a.IE.COMPACT : a.IE.COZY,
  setValue: e => {
    s.hH.updateSetting(e === a.IE.COMPACT), (0, n.AC)()
  }
})