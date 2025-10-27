/** Chunk was on web.js **/
/** chunk id: 557135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk258609 = require("./258609.js"),
  Chunk703656 = require("./703656.js"),
  Chunk414509 = require("./414509.js"),
  Chunk452369 = require("./452369.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk366297 = require("./366297.js"),
  Chunk981631 = require("./981631.js"),
  Chunk110223 = require("./110223.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.getGuildId();
  if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
  (0, s.uL)(g.Z5c.CHANNEL(n, e.id))
}
let v = {
  async handleVoiceConnect(e) {
    let {
      channel: t,
      connected: s,
      needSubscriptionToAccess: b,
      locked: v = false,
      routeDirectlyToChannel: I = false,
      bypassChangeModal: T,
      bypassBlockedWarningModal: S,
      bypassGuildIdCheck: A = false
    } = e;
    t.isThread() && (await d.Z.unarchiveThreadIfNecessary(t.id), u.Z.hasJoined(t.id) || await d.Z.joinThread(t, "Join Voice"));
    let C = o.default.getRemoteSessionId(),
      N = p.Z.getVoiceStateForSession(f.default.getId(), C),
      R = (null == N ? true : N.channelId) === t.id || _.Z.getChannelId() === p.Z.getCurrentClientVoiceChannelId(t.guild_id),
      P = c.Z.getBlockedUsersForVoiceChannel(t.id),
      D = c.Z.getIgnoredUsersForVoiceChannel(t.id);
    return ((0, l.Fd)(new Set([...P, ...D])) && (S = true), S || v || s || !(P.size > 0) && !(D.size > 0)) ? !T && !v && (0, m._)(t) ? new Promise(e => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await n.e("65045").then(n.bind(n, 143782));
        return n => (0, r.jsx)(i, y({
          channel: t,
          onConfirm: () => e(this.handleVoiceConnect({
            channel: t,
            connected: s,
            needSubscriptionToAccess: b,
            routeDirectlyToChannel: I,
            locked: v,
            bypassChangeModal: true
          }))
        }, n))
      })
    }) : (v || s || a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (s || R || b || I) && O(t, A), true) : new Promise(e => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await n.e("12858").then(n.bind(n, 404339));
        return n => {
          let {
            onClose: a,
            transitionState: o
          } = n;
          return (0, r.jsx)(i, {
            channelId: t.id,
            blockedUserIds: P,
            ignoredUserIds: D,
            transitionState: o,
            onClose: a,
            onJoin: () => e(this.handleVoiceConnect({
              channel: t,
              connected: s,
              needSubscriptionToAccess: b,
              routeDirectlyToChannel: I,
              locked: v,
              bypassChangeModal: true,
              bypassBlockedWarningModal: true
            }))
          })
        }
      }, {
        onCloseCallback: () => {
          h.default.track(g.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
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