/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(232567),
  i = n(147913),
  o = n(592125),
  a = n(944486),
  s = n(594174),
  l = n(894257),
  c = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = !1;

function f(e) {
  if (__OVERLAY__) return;
  let t = s.default.getCurrentUser();
  if (null == t) return;
  let n = a.Z.getChannelId(),
    r = o.Z.getDMFromUserId(l.I);
  if (!t.hasUrgentMessages() || r === n) return p({
    channelId: n
  });
  d || (d = !0, e())
}

function p(e) {
  let {
    channelId: t
  } = e, n = s.default.getCurrentUser(), i = t === o.Z.getDMFromUserId(l.I);
  null != n && n.hasUrgentMessages() && i && (d = !1, r.mB(c.xW$.HAS_UNREAD_URGENT_MESSAGES, !1))
}
class _ extends i.Z {
  constructor(e) {
    super(), u(this, "handleShowUrgentMessageAlert", void 0), u(this, "actions", void 0), this.handleShowUrgentMessageAlert = e, this.actions = {
      POST_CONNECTION_OPEN: () => f(this.handleShowUrgentMessageAlert),
      MESSAGE_CREATE: () => f(this.handleShowUrgentMessageAlert),
      CHANNEL_SELECT: p
    }
  }
}