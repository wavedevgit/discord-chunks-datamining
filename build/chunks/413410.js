/** Chunk was on 77069 **/
/** chunk id: 413410, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B: () => E,
  I: () => d
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

function E() {
  return (0, i.e7)([a.default, u.Z], () => {
    var t;
    let e = a.default.getCurrentUser(),
      n = null != (t = null == e ? true : e.isStaff()) && t,
      i = "canary" === o.ZP.releaseChannel || "development" === o.ZP.releaseChannel,
      l = u.Z.supports(S.AN.CONNECTION_REPLAY);
    return n && i && l
  })
}
let d = (0, Chunk509613.qs)(Chunk313789.n.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
  useTitle: () => c.intl.string(c.t.U4FgFK),
  useSubtitle: () => c.intl.string(c.t.Lm72RU),
  useValue: function() {
    return (0, i.e7)([r.ZP], () => r.ZP.shouldRecordNextConnection())
  },
  setValue: Chunk304680.TC,
  usePredicate: E
})