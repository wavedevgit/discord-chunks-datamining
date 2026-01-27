/** Chunk was on 93140 **/
/** chunk id: 324050, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => u
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
  lastGuildDismissedTime: {}
};
class c extends(i = Chunk311907.Ay.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : s;
    r = e
  }
  getUserAgnosticState() {
    return r
  }
  getLastGuildDismissedTime(e) {
    return r.lastGuildDismissedTime[e]
  }
}
a(c, "displayName", "ApplicationSubscriptionChannelNoticeStore"), a(c, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let u = new c(Chunk73153.h, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
    let {
      guildId: t
    } = e;
    r.lastGuildDismissedTime[t] = Date.now()
  }
})