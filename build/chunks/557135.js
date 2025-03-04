/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => O
}), n(411104);
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(287734),
  a = n(258609),
  s = n(703656),
  l = n(414509),
  c = n(452369),
  u = n(569471),
  d = n(346479),
  f = n(314897),
  _ = n(944486),
  p = n(979651),
  h = n(626135),
  g = n(366297),
  m = n(981631),
  E = n(110223);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = e.getGuildId();
  if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
  (0, s.uL)(m.Z5c.CHANNEL(n, e.id))
}
let O = {
  async handleVoiceConnect(e) {
    let {
      channel: t,
      connected: s,
      needSubscriptionToAccess: v,
      locked: O = !1,
      routeDirectlyToChannel: S = !1,
      bypassChangeModal: I,
      bypassBlockedWarningModal: T,
      bypassGuildIdCheck: N = !1
    } = e;
    t.isThread() && (await d.Z.unarchiveThreadIfNecessary(t.id), u.Z.hasJoined(t.id) || await d.Z.joinThread(t, "Join Voice"));
    let A = a.Z.getRemoteSessionId(),
      C = p.Z.getVoiceStateForSession(f.default.getId(), A),
      R = (null == C ? void 0 : C.channelId) === t.id || _.Z.getChannelId() === p.Z.getCurrentClientVoiceChannelId(t.guild_id),
      P = c.Z.getBlockedUsersForVoiceChannel(t.id),
      D = c.Z.getIgnoredUsersForVoiceChannel(t.id);
    return ((0, l.B)(t.id) && (T = !0), T || O || s || !(P.size > 0) && !(D.size > 0)) ? !I && !O && (0, g._)(t) ? new Promise(e => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await n.e("65045").then(n.bind(n, 143782));
        return n => (0, r.jsx)(i, b({
          channel: t,
          onConfirm: () => e(this.handleVoiceConnect({
            channel: t,
            connected: s,
            needSubscriptionToAccess: v,
            routeDirectlyToChannel: S,
            locked: O,
            bypassChangeModal: !0
          }))
        }, n))
      })
    }) : (O || s || o.default.selectVoiceChannel(t.id), !__OVERLAY__ && (s || R || v || S) && y(t, N), !0) : new Promise(e => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("25176"), n.e("79726")]).then(n.bind(n, 404339));
        return n => {
          let {
            onClose: o,
            transitionState: a
          } = n;
          return (0, r.jsx)(i, {
            channelId: t.id,
            blockedUserIds: P,
            ignoredUserIds: D,
            transitionState: a,
            onClose: o,
            onJoin: () => e(this.handleVoiceConnect({
              channel: t,
              connected: s,
              needSubscriptionToAccess: v,
              routeDirectlyToChannel: S,
              locked: O,
              bypassChangeModal: !0,
              bypassBlockedWarningModal: !0
            }))
          })
        }
      }, {
        onCloseCallback: () => {
          h.default.track(m.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
            action: E.q.DISMISS,
            channel_id: t.id,
            blocked_user_ids: Array.from(P),
            ignored_user_ids: Array.from(D),
            warning_surface: E.fz.PRE_JOIN_MODAL
          })
        }
      })
    })
  }
}