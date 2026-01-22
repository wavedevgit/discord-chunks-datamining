/** Chunk was on 88615 **/
/** chunk id: 613943, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./321073.js"), require("./896048.js");
var Chunk554146 = require("./554146.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk553103 = require("./553103.js");

function s(e) {
  let {
    shouldShow: t,
    notificationConfig: l
  } = (0, i.A)(e, "GuildPowerupNotificationContainer"), s = [];
  t && null != l && s.push(r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
  let [o, a] = (0, n.ww)(s, e);
  return {
    shouldShow: null != o && o === r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
    notificationConfig: l,
    markAsDismissed: a
  }
}