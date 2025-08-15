/** Chunk was on 42521 **/
/** chunk id: 617889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk509212 = require("./509212.js"),
  Chunk988303 = require("./988303.js"),
  Chunk658590 = require("./658590.js"),
  Chunk448018 = require("./448018.js"),
  Chunk46140 = require("./46140.js");
let c = (e, t) => {
  let n = (0, s.zK)(e, l.S7.QUEST_BAR_V2),
    c = (0, a.a)(e),
    {
      primaryVariant: u,
      progressVariant: d
    } = o.u.useExperiment({
      location: l.dr.QUESTS_BAR
    }, {
      autoTrackExposure: t && n
    });
  return r.useMemo(() => c ? (0, i.v)(e, o.P.V2, o.P.V2) : n ? (0, i.v)(e, u, d) : (0, i.v)(e, o.P.V1, o.P.V1), [c, u, d, e, n])
}