/** Chunk was on web.js **/
/** chunk id: 136787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => p
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk826673 = require("./826673.js"),
  Chunk166403 = require("./166403.js"),
  Chunk635431 = require("./635431.js"),
  Chunk49999 = require("./49999.js");
let d = 12096e5,
  f = i()("2025-11-10 10:00:00-08:00").toDate(),
  p = () => {
    let {
      enabled: e,
      forceNotice: t
    } = c.l.useExperiment({
      location: "useShouldShowPriceDecreaseNotice"
    }), n = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription());
    if ((0, o.JZ)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE) || new Date < f && !t || null == n || null != n.createdAt && n.createdAt > f && !t) returnfalse;
    let r = n.currentPeriodStart,
      i = n.currentPeriodEnd,
      p = i <= new Date(Date.now() + d) && i > new Date;
    return r > f ? ((0, o.Dr)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
      dismissAction: u.i.AUTO_DISMISS
    }), false) : !!p && e
  }