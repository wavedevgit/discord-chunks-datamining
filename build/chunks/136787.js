/** Chunk was on 78376 **/
/** chunk id: 136787, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => _
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk826673 = require("./826673.js"),
  Chunk166403 = require("./166403.js"),
  Chunk635431 = require("./635431.js"),
  Chunk49999 = require("./49999.js");
let u = i()("2025-11-10 10:00:00-08:00").toDate(),
  _ = () => {
    let {
      enabled: e,
      forceNotice: t
    } = c.l.useExperiment({
      location: "useShouldShowPriceDecreaseNotice"
    }), n = (0, l.bG)([o.A], () => o.A.getPremiumTypeSubscription());
    if ((0, a.JZ)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE) || new Date < u && !t || null == n || null != n.createdAt && n.createdAt > u && !t) returnfalse;
    let r = n.currentPeriodStart,
      i = n.currentPeriodEnd,
      _ = i <= new Date(Date.now() + 12096e5) && i > new Date;
    return r > u ? ((0, a.Dr)(s.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
      dismissAction: d.i.AUTO_DISMISS
    }), false) : !!_ && e
  }