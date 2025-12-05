/** Chunk was on 77069 **/
/** chunk id: 413410, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B: () => S,
  I: () => I
});
var Chunk442837 = require("./442837.js"),
  Chunk304680 = require("./304680.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk226961 = require("./226961.js"),
  Chunk594174 = require("./594174.js"),
  Chunk998502 = require("./998502.js"),
  Chunk313789 = require("./313789.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function S() {
  return (0, Chunk442837.e7)([Chunk594174.default, Chunk131951.Z], () => {
    var t;
    let e = Chunk594174.default.getCurrentUser(),
      n = null != (t = null == exports ? true : exports.isStaff()) && module,
      i = "canary" === Chunk998502.ZP.releaseChannel || "development" === Chunk998502.ZP.releaseChannel,
      l = Chunk131951.Z.supports(Chunk65154.AN.CONNECTION_REPLAY);
    return require && Chunk442837 && Chunk304680
  })
}
let I = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.U4FgFK),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.Lm72RU),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk226961.ZP], () => Chunk226961.ZP.shouldRecordNextConnection())
  },
  setValue: Chunk304680.TC,
  usePredicate: S
})