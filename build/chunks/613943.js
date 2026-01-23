/** Chunk was on 88615 **/
/** chunk id: 613943, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./321073.js"), require("./896048.js");
var Chunk554146 = require("./554146.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk553103 = require("./553103.js");

function o(e) {
  let {
    shouldShow: t,
    notificationConfig: n
  } = (0, i.A)(e, "GuildPowerupNotificationContainer"), o = [];
  t && null != n && o.push(r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
  let [s, a] = (0, l.ww)(o, e);
  return {
    shouldShow: null != s && s === r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
    notificationConfig: n,
    markAsDismissed: a
  }
}