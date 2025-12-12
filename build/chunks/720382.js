/** Chunk was on 77069 **/
/** chunk id: 720382, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  E: () => a
});
var Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418924 = require("./418924.js");
let a = (0, Chunk509613.qs)(Chunk313789.n.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk418924.default.Uz5Ipi),
  useSubtitle: () => Chunk388032.intl.string(Chunk418924.default.CZI2Gb),
  useValue: () => Chunk695346.Ou.useSetting(),
  setValue: t => l.Ou.updateSetting(t)
})