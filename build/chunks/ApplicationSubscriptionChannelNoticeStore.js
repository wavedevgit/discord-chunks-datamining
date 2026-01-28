/** Chunk was on 92201 **/
/** chunk id: 324050, original params: e,t,r (module,exports,require) **/
let i;
require.d(exports, {
  A: () => C
});
var n, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let c = {
  lastGuildDismissedTime: {}
};
class a extends(n = Chunk311907.Ay.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : c;
    i = e
  }
  getUserAgnosticState() {
    return i
  }
  getLastGuildDismissedTime(e) {
    return i.lastGuildDismissedTime[e]
  }
}
o(a, "displayName", "ApplicationSubscriptionChannelNoticeStore"), o(a, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let C = new a(Chunk73153.h, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
    let {
      guildId: t
    } = e;
    i.lastGuildDismissedTime[t] = Date.now()
  }
})