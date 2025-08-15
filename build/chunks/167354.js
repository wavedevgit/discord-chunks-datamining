/** Chunk was on 30202 **/
/** chunk id: 167354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk78839 = require("./78839.js"),
  Chunk231338 = require("./231338.js");
let o = function(e) {
  let {
    subscriptionFilter: t
  } = e, n = (0, r.e7)([a.Z], () => a.Z.getSubscriptions(true)), o = i.useMemo(() => null == n ? [] : Object.values(n).filter(e => e.type === l.NY.PREMIUM && e.userId === s.default.getId() && (null == t || !!t(e))), [n, t]);
  return o.sort((e, t) => {
    var n, i;
    let r = null != (n = e.paymentGateway) ? n : 0,
      s = null != (i = t.paymentGateway) ? i : 0;
    return r < s ? false : +(r > s)
  }), o
}