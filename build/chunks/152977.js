/** Chunk was on 77069 **/
/** chunk id: 152977, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => o
});
var Chunk857595 = require("./857595.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk501348 = require("./501348.jsx"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.J9)(Chunk313789.n.APPEARANCE_MESSAGE_DISPLAY_MODE, {
  useTitle: () => a.intl.string(a.t.nKRoPv),
  useSubtitle: () => a.intl.string(a.t.QntEEG),
  useOptions: () => [{
    name: a.intl.string(a.t.Jqj4cZ),
    value: r.pe.COZY
  }, {
    name: a.intl.string(a.t["1JNcPS"]),
    value: r.pe.COMPACT
  }],
  useValue: () => s.jU.useSetting() ? r.pe.COMPACT : r.pe.COZY,
  setValue: t => {
    s.jU.updateSetting(t === r.pe.COMPACT), (0, i.ZZ)()
  }
})