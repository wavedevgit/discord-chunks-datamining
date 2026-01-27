/** Chunk was on web.js **/
/** chunk id: 262763, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk134047 = require("./134047.js"),
  Chunk643501 = require("./643501.js"),
  Chunk976860 = require("./976860.js"),
  Chunk158160 = require("./158160.js"),
  Chunk741812 = require("./741812.js"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk961350 = require("./961350.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk389234 = require("./389234.js"),
  Chunk652215 = require("./652215.js"),
  Chunk64175 = require("./64175.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.getGuildId();
  if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
  (0, l.pX)(E.BVt.CHANNEL(n, e.id))
}
let A = {
  async handleVoiceConnect(e) {
    let {
      channel: t,
      connected: l,
      needSubscriptionToAccess: b,
      locked: A = false,
      routeDirectlyToChannel: I = false,
      bypassChangeModal: S,
      bypassBlockedWarningModal: T,
      bypassGuildIdCheck: C = false
    } = e;
    t.isThread() && (await f.A.unarchiveThreadIfNecessary(t.id), d.A.hasJoined(t.id) || await f.A.joinThread(t, "Join Voice"));
    let N = s.default.getRemoteSessionId(),
      w = h.A.getVoiceStateForSession(p.default.getId(), N),
      R = (null == w ? true : w.channelId) === t.id || _.A.getChannelId() === h.A.getCurrentClientVoiceChannelId(t.guild_id),
      P = u.A.getBlockedUsersForVoiceChannel(t.id),
      D = u.A.getIgnoredUsersForVoiceChannel(t.id),
      {
        autoNavigateChannel: L
      } = o.M.getConfig({
        location: "handleVoiceChannelSelect"
      });
    return ((0, c.oE)(new Set([...P, ...D])) && (T = true), T || A || l || !(P.size > 0) && !(D.size > 0)) ? !S && !A && (0, g.H)(t) ? new Promise(e => {
      (0, i.mMO)(async () => {
        let {
          default: i
        } = await n.e("12963").then(n.bind(n, 24814));
        return n => (0, r.jsx)(i, O({
          channel: t,
          onConfirm: () => e(this.handleVoiceConnect({
            channel: t,
            connected: l,
            needSubscriptionToAccess: b,
            routeDirectlyToChannel: I,
            locked: A,
            bypassChangeModal: true
          }))
        }, n))
      })
    }) : (A || l || a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (l || R || b || I || L) && v(t, C), true) : new Promise(e => {
      (0, i.mMO)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("83792"), n.e("41688")]).then(n.bind(n, 525828));
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
              connected: l,
              needSubscriptionToAccess: b,
              routeDirectlyToChannel: I,
              locked: A,
              bypassChangeModal: true,
              bypassBlockedWarningModal: true
            }))
          })
        }
      }, {
        onCloseCallback: () => {
          m.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
            action: y.Qi.DISMISS,
            channel_id: t.id,
            blocked_user_ids: Array.from(P),
            ignored_user_ids: Array.from(D),
            warning_surface: y.gD.PRE_JOIN_MODAL
          })
        }
      })
    })
  }
}