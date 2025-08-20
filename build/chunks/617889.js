/** Chunk was on web.js **/
/** chunk id: 617889, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  let n = (0, i.zK)(e, l.S7.QUEST_BAR_V2),
    c = (0, o.a)(e),
    {
      primaryVariant: u,
      progressVariant: d
    } = a.u.useExperiment({
      location: l.dr.QUESTS_BAR
    }, {
      autoTrackExposure: t && n
    });
  return r.useMemo(() => c ? (0, s.v)(e, a.P.V2, a.P.V2) : n ? (0, s.v)(e, u, d) : (0, s.v)(e, a.P.V1, a.P.V1), [c, u, d, e, n])
}