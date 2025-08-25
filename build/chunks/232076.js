/** Chunk was on web.js **/
/** chunk id: 232076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => _
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk975298 = require("./975298.js"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk140465 = require("./140465.js"),
  Chunk775412 = require("./775412.js"),
  Chunk276444 = require("./276444.js"),
  Chunk912244 = require("./912244.js"),
  Chunk474936 = require("./474936.js");
let _ = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
    _ = (0, l.t7)(),
    p = (0, c._O)(),
    {
      eligibleToFetch: h
    } = (0, d.N)(e),
    m = (0, o.Z)(),
    g = h && (null == n ? true : n.verified) === true && (0, s.M5)(n, f.p9.TIER_2) && m.fetched && m.fractionalState !== f.a$.FP_ONLY && !_ && !p;
  r.useEffect(() => {
    g && !t && u.Z.checkAndFetchReferralsRemaining()
  }, [g, t])
}