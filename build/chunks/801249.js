/** Chunk was on 96616 **/
let n;
i.d(e, {
  Z: () => p
});
var r, s = i(442837),
  o = i(570140);

function l(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t
}
let a = {
  lastGuildDismissedTime: {}
};
class c extends(r = s.ZP.DeviceSettingsStore) {
  initialize() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
    n = t
  }
  getUserAgnosticState() {
    return n
  }
  getLastGuildDismissedTime(t) {
    return n.lastGuildDismissedTime[t]
  }
}
l(c, "displayName", "ApplicationSubscriptionChannelNoticeStore"), l(c, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let p = new c(o.Z, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
    let {
      guildId: e
    } = t;
    n.lastGuildDismissedTime[e] = Date.now()
  }
})