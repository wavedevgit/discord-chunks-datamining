/** Chunk was on 30485 **/
/** chunk id: 333659, original params: t,e,i (module,exports,require) **/
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
  useTitle: () => a.intl.string(a.t.nKRoPv),
  useSubtitle: () => a.intl.string(a.t.QntEEG),
  useOptions: () => [{
    name: a.intl.string(a.t.Jqj4cZ),
    value: u.IE.COZY
  }, {
    name: a.intl.string(a.t["1JNcPS"]),
    value: u.IE.COMPACT
  }],
  useValue: () => s.hH.useSetting() ? u.IE.COMPACT : u.IE.COZY,
  setValue: t => {
    s.hH.updateSetting(t === u.IE.COMPACT), (0, n.AC)()
  }
})