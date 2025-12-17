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
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.nKRoPv),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.QntEEG),
  useOptions: () => [{
    name: Chunk388032.intl.string(Chunk388032.t.Jqj4cZ),
    value: Chunk501348.pe.COZY
  }, {
    name: Chunk388032.intl.string(Chunk388032.t["1JNcPS"]),
    value: Chunk501348.pe.COMPACT
  }],
  useValue: () => Chunk695346.jU.useSetting() ? Chunk501348.pe.COMPACT : Chunk501348.pe.COZY,
  setValue: t => {
    s.jU.updateSetting(t === r.pe.COMPACT), (0, i.ZZ)()
  }
})