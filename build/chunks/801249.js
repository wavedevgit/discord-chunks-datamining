/** Chunk was on 42191 **/
let i;
n.d(t, {
  Z: () => _
});
var o, r = n(442837),
  a = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {
  lastGuildDismissedTime: {}
};
class s extends(o = r.ZP.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
    i = e
  }
  getUserAgnosticState() {
    return i
  }
  getLastGuildDismissedTime(e) {
    return i.lastGuildDismissedTime[e]
  }
}
l(s, "displayName", "ApplicationSubscriptionChannelNoticeStore"), l(s, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let _ = new s(a.Z, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
    let {
      guildId: t
    } = e;
    i.lastGuildDismissedTime[t] = Date.now()
  }
})