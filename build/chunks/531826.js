/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  ZP: () => p,
  jA: () => h,
  sU: () => m
}), n(789020);
var r = n(442837),
  i = n(812206),
  o = n(522474),
  a = n(630388),
  s = n(636449),
  l = n(317381),
  c = n(16609),
  u = n(917107),
  d = n(918559),
  f = n(981631);

function p(e) {
  var t;
  let {
    application: n,
    channelId: r
  } = e;
  if (null != n && (0, a.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, f.udG.EMBEDDED)) {
    if (o.Z.getWindowOpen(f.KJ3.ACTIVITY_POPOUT) && l.ZP.getActivityPanelMode() === d.Ez.ACTIVITY_POPOUT_WINDOW) return f.KJ3.ACTIVITY_POPOUT;
    if (o.Z.getWindowOpen(f.KJ3.CHANNEL_CALL_POPOUT) && (0, u.Z)(r) && !(0, s.R)()) return f.KJ3.CHANNEL_CALL_POPOUT
  }
}

function _(e) {
  let {
    channelId: t,
    EmbeddedActivitiesStore: n,
    ApplicationStore: r
  } = e, i = n.getSelfEmbeddedActivityForChannel(t), o = r.getApplication(null == i ? void 0 : i.applicationId);
  if (null != o) return p({
    application: o,
    channelId: t
  })
}

function h(e) {
  let {
    applicationId: t
  } = e, n = l.ZP.getCurrentEmbeddedActivity();
  if (null == n || n.applicationId !== t) return;
  let r = i.Z.getApplication(t);
  if (null != r) return p({
    application: r,
    channelId: (0, c.pY)(n.location)
  })
}

function m(e) {
  let {
    channelId: t
  } = e;
  return (0, r.e7)([o.Z, l.ZP, i.Z], () => {
    let e = _({
      channelId: null != t ? t : l.ZP.getConnectedActivityChannelId(),
      EmbeddedActivitiesStore: l.ZP,
      ApplicationStore: i.Z
    });
    return null != e ? o.Z.getWindow(e) : void 0
  })
}