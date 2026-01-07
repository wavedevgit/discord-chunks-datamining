/** Chunk was on web.js **/
/** chunk id: 160913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => f
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function f() {
  let e = (0, a.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
    t = (0, a.e7)([s.Z], () => null != e && null != e.planIdFromItems ? s.Z.get(null == e ? true : e.planIdFromItems) : null),
    n = (0, a.e7)([o.Z], () => null != e && null != e.paymentSourceId ? o.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
    r = null != n && d.Uk.has(n.type),
    f = (null == e ? true : e.status) === u.O0b.PAST_DUE ? i()().diff(i()(e.currentPeriodStart), "days") : 0;
  return !!(null != e && null != t && (0, c.uZ)(t.id)) && r && f >= 0 && f <= (0, c.lY)(e).days && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally
}