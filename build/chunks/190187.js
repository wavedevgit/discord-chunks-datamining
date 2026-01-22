/** Chunk was on web.js **/
/** chunk id: 190187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => f
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
let f = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
    n = (0, l.k5)(),
    f = (0, c.QQ)(),
    p = (0, a.A)(),
    _ = (null == t ? true : t.verified) === true && (0, o.YE)(t, d.PremiumTypes.TIER_2) && p.fetched && p.fractionalState !== d.xc.FP_ONLY && !n && !f;
  r.useEffect(() => {
    _ && !e && u.A.checkAndFetchReferralsRemaining()
  }, [_, e])
}