/** Chunk was on web.js **/
/** chunk id: 155984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => f
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk295405 = require("./295405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function f() {
  let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
    t = (0, a.bG)([o.A], () => null != e && null != e.planIdFromItems ? o.A.get(null == e ? true : e.planIdFromItems) : null),
    n = (0, a.bG)([s.A], () => null != e && null != e.paymentSourceId ? s.A.getPaymentSource(e.paymentSourceId) : null, [e]),
    r = null != n && d.AD.has(n.type),
    f = (null == e ? true : e.status) === u.Dmq.PAST_DUE ? i()().diff(i()(e.currentPeriodStart), "days") : 0;
  return !!(null != e && null != t && (0, c.xq)(t.id)) && r && f >= 0 && f <= (0, c.ji)(e).days && e.status === u.Dmq.PAST_DUE && !e.isPurchasedExternally
}