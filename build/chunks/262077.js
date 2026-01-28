/** Chunk was on 5606 **/
/** chunk id: 262077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk166403 = require("./166403.js"),
  Chunk818348 = require("./818348.js");
let o = function(e) {
  let {
    subscriptionFilter: t
  } = e, n = (0, i.bG)([s.A], () => s.A.getSubscriptions(true)), o = r.useMemo(() => null == n ? [] : Object.values(n).filter(e => e.type === a.rz.PREMIUM && e.userId === l.default.getId() && (null == t || !!t(e))), [n, t]);
  return o.sort((e, t) => {
    var n, r;
    let i = null != (n = e.paymentGateway) ? n : 0,
      l = null != (r = t.paymentGateway) ? r : 0;
    return i < l ? false : +(i > l)
  }), o
}