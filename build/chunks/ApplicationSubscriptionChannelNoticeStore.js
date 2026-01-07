/** Chunk was on web.js **/
/** chunk id: 801249, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => d
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, n) {
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
class u extends(i = Chunk442837.ZP.DeviceSettingsStore) {
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
s(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"), s(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let d = new u(Chunk570140.Z, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: c
})