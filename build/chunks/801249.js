/** Chunk was on 53071 **/
let o;
t.d(n, {
  Z: () => s
});
var i, r = t(442837),
  a = t(570140);

function c(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let l = {
  lastGuildDismissedTime: {}
};
class _ extends(i = r.ZP.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
    o = e
  }
  getUserAgnosticState() {
    return o
  }
  getLastGuildDismissedTime(e) {
    return o.lastGuildDismissedTime[e]
  }
}
c(_, "displayName", "ApplicationSubscriptionChannelNoticeStore"), c(_, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let s = new _(a.Z, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
    let {
      guildId: n
    } = e;
    o.lastGuildDismissedTime[n] = Date.now()
  }
})