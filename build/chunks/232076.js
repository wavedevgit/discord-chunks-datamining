/** Chunk was on 91173 **/
/** chunk id: 232076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => m
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
let m = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
    m = (0, s.t7)(),
    f = (0, c._O)(),
    {
      eligibleToFetch: g
    } = (0, d.N)(e),
    _ = (0, l.Z)(),
    h = g && (null == n ? true : n.verified) === true && (0, a.M5)(n, p.p9.TIER_2) && _.fetched && _.fractionalState !== p.a$.FP_ONLY && !m && !f;
  r.useEffect(() => {
    h && !t && u.Z.checkAndFetchReferralsRemaining()
  }, [h, t])
}