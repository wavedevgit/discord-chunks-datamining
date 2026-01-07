/** Chunk was on web.js **/
/** chunk id: 975772, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => p
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk78839 = require("./78839.js"),
  Chunk670087 = require("./670087.js"),
  Chunk921944 = require("./921944.js");
let d = 12096e5,
  f = i()("2025-11-10 10:00:00-08:00").toDate(),
  p = () => {
    let {
      enabled: e,
      forceNotice: t
    } = c.j.useExperiment({
      location: "useShouldShowPriceDecreaseNotice"
    }), n = (0, a.e7)([l.Z], () => l.Z.getPremiumTypeSubscription());
    if ((0, s.Nj)(o.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE) || new Date < f && !t || null == n || null != n.createdAt && n.createdAt > f && !t) returnfalse;
    let r = n.currentPeriodStart,
      i = n.currentPeriodEnd,
      p = i <= new Date(Date.now() + d) && i > new Date;
    return r > f ? ((0, s.Q3)(o.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
      dismissAction: u.L.AUTO_DISMISS
    }), false) : !!p && e
  }