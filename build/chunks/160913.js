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
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    t = (0, Chunk442837.e7)([Chunk509545.Z], () => null != module && null != module.planIdFromItems ? Chunk509545.Z.get(null == module ? true : module.planIdFromItems) : null),
    n = (0, Chunk442837.e7)([Chunk853872.Z], () => null != module && null != module.paymentSourceId ? Chunk853872.Z.getPaymentSource(module.paymentSourceId) : null, [module]),
    r = null != require && Chunk231338.Uk.has(require.type),
    f = (null == module ? true : module.status) === Chunk981631.O0b.PAST_DUE ? i()().diff(i()(module.currentPeriodStart), "days") : 0;
  return !!(null != module && null != exports && (0, Chunk74538.uZ)(exports.id)) && Chunk913527 && f >= 0 && f <= (0, Chunk74538.lY)(module).days && module.status === Chunk981631.O0b.PAST_DUE && !module.isPurchasedExternally
}