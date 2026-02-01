/** Chunk was on 9753 **/
/** chunk id: 190187, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk531260 = require("./531260.js"),
  Chunk287809 = require("./287809.js"),
  Chunk474090 = require("./474090.js"),
  Chunk526292 = require("./526292.js"),
  Chunk89366 = require("./89366.js"),
  Chunk851746 = require("./851746.js"),
  Chunk788868 = require("./788868.js");
let p = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
    n = (0, o.k5)(),
    p = (0, c.QQ)(),
    m = (0, l.A)(),
    f = (null == t ? true : t.verified) === true && (0, s.YE)(t, d.PremiumTypes.TIER_2) && m.fetched && m.fractionalState !== d.xc.FP_ONLY && !n && !p;
  r.useEffect(() => {
    f && !e && u.A.checkAndFetchReferralsRemaining()
  }, [f, e])
}