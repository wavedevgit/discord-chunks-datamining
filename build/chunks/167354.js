/** Chunk was on web.js **/
/** chunk id: 167354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk78839 = require("./78839.js"),
  Chunk231338 = require("./231338.js");
let l = function(e) {
  let {
    subscriptionFilter: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.getSubscriptions(true)), l = r.useMemo(() => null == n ? [] : Object.values(n).filter(e => e.type === s.NY.PREMIUM && e.userId === o.default.getId() && (null == t || !!t(e))), [n, t]);
  return l.sort((e, t) => {
    var n, r;
    let i = null != (n = e.paymentGateway) ? n : 0,
      o = null != (r = t.paymentGateway) ? r : 0;
    return i < o ? false : +(i > o)
  }), l
}