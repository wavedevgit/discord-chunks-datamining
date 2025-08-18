/** Chunk was on 21046 **/
/** chunk id: 617889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk509212 = require("./509212.js"),
  Chunk988303 = require("./988303.js"),
  Chunk658590 = require("./658590.js"),
  Chunk448018 = require("./448018.js"),
  Chunk46140 = require("./46140.js");
let c = (e, t) => {
  let n = (0, s.zK)(e, l.S7.QUEST_BAR_V2),
    c = (0, a.a)(e),
    {
      primaryVariant: d,
      progressVariant: u
    } = o.u.useExperiment({
      location: l.dr.QUESTS_BAR
    }, {
      autoTrackExposure: t && n
    });
  return r.useMemo(() => c ? (0, i.v)(e, o.P.V2, o.P.V2) : n ? (0, i.v)(e, d, u) : (0, i.v)(e, o.P.V1, o.P.V1), [c, d, u, e, n])
}