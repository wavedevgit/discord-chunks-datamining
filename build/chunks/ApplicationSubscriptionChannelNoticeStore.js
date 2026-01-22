/** Chunk was on web.js **/
/** chunk id: 324050, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => d
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
  lastGuildDismissedTime: {}
};

function c(e) {
  let {
    guildId: t
  } = e;
  r.lastGuildDismissedTime[t] = Date.now()
}
class u extends(i = Chunk311907.Ay.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : l;
    r = e
  }
  getUserAgnosticState() {
    return r
  }
  getLastGuildDismissedTime(e) {
    return r.lastGuildDismissedTime[e]
  }
}
o(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"), o(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let d = new u(Chunk73153.h, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: c
})