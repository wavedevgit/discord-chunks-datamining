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
    } = Chunk670087.j.useExperiment({
      location: "useShouldShowPriceDecreaseNotice"
    }), n = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription());
    if ((0, Chunk266454.Nj)(Chunk704215.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE) || new Date < f && !exports || null == require || null != require.createdAt && require.createdAt > f && !exports) returnfalse;
    let r = require.currentPeriodStart,
      i = require.currentPeriodEnd,
      p = i <= new Date(Date.now() + d) && i > new Date;
    return Chunk913527 > f ? ((0, Chunk266454.Q3)(Chunk704215.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
      dismissAction: Chunk921944.L.AUTO_DISMISS
    }), false) : !!p && module
  }