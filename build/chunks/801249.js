/** Chunk was on 79602 **/
let i;
n.d(e, {
  Z: () => u
});
var r, o = n(442837),
  s = n(570140);

function l(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let a = {
  lastGuildDismissedTime: {}
};
class c extends(r = o.ZP.DeviceSettingsStore) {
  initialize() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
    i = t
  }
  getUserAgnosticState() {
    return i
  }
  getLastGuildDismissedTime(t) {
    return i.lastGuildDismissedTime[t]
  }
}
l(c, "displayName", "ApplicationSubscriptionChannelNoticeStore"), l(c, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let u = new c(s.Z, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
    let {
      guildId: e
    } = t;
    i.lastGuildDismissedTime[e] = Date.now()
  }
})