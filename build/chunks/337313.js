/** Chunk was on 28979 **/
/** chunk id: 337313, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  S: () => S,
  T: () => E
});
var Chunk311907 = require("./311907.js"),
  Chunk233545 = require("./233545.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk412780 = require("./412780.js"),
  Chunk287809 = require("./287809.js"),
  Chunk837921 = require("./837921.js"),
  Chunk780964 = require("./780964.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function S() {
  return (0, n.bG)([a.default, r.A], () => {
    var t;
    let e = a.default.getCurrentUser(),
      i = null != (t = null == e ? true : e.isStaff()) && t,
      n = "canary" === o.Ay.releaseChannel || "development" === o.Ay.releaseChannel,
      l = r.A.supports(A.O5.CONNECTION_REPLAY);
    return i && n && l
  })
}
let E = (0, Chunk419954.zD)(Chunk780964.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
  useTitle: () => d.intl.string(d.t.U4FgFK),
  useSubtitle: () => d.intl.string(d.t.Lm72RU),
  useValue: function() {
    return (0, n.bG)([u.Ay], () => u.Ay.shouldRecordNextConnection())
  },
  setValue: Chunk233545.Et,
  usePredicate: S
})