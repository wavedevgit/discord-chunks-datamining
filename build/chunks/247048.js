/** Chunk was on 44799 **/
/** chunk id: 247048, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./539854.js"), require("./388685.js");
var Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk839637 = require("./839637.js");

function l(e) {
  let {
    shouldShow: t,
    notificationConfig: n
  } = (0, o.Z)(e, "GuildPowerupNotificationContainer"), l = [];
  t && null != n && l.push(r.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
  let [a, s] = (0, i.ZT)(l, e);
  return {
    shouldShow: null != a && a === r.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
    notificationConfig: n,
    markAsDismissed: s
  }
}