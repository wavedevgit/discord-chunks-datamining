/** Chunk was on 71088 **/
/** chunk id: 801249, original params: e,n,t (module,exports,require) **/
let o;
require.d(exports, {
  Z: () => s
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function c(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let l = {
  lastGuildDismissedTime: {}
};
class _ extends(i = Chunk442837.ZP.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : l;
    o = module
  }
  getUserAgnosticState() {
    return o
  }
  getLastGuildDismissedTime(e) {
    return o.lastGuildDismissedTime[e]
  }
}
c(_, "displayName", "ApplicationSubscriptionChannelNoticeStore"), c(_, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let s = new _(Chunk570140.Z, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
    let {
      guildId: n
    } = e;
    o.lastGuildDismissedTime[n] = Date.now()
  }
})