/** Chunk was on web.js **/
/** chunk id: 262077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk166403 = require("./166403.js"),
  Chunk818348 = require("./818348.js");
let l = function(e) {
  let {
    subscriptionFilter: t
  } = e, n = (0, i.bG)([s.A], () => s.A.getSubscriptions(true)), l = r.useMemo(() => null == n ? [] : Object.values(n).filter(e => e.type === o.rz.PREMIUM && e.userId === a.default.getId() && (null == t || !!t(e))), [n, t]);
  return l.sort((e, t) => {
    var n, r;
    let i = null != (n = e.paymentGateway) ? n : 0,
      a = null != (r = t.paymentGateway) ? r : 0;
    return i < a ? false : +(i > a)
  }), l
}