/** Chunk was on 84018 **/
/** chunk id: 888288, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => es
}), require("./896048.js"), require("./321073.js");
var i, Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk118356 = require("./118356.js"),
  Chunk73153 = require("./73153.js"),
  Chunk684013 = require("./684013.js"),
  Chunk504139 = require("./504139.js"),
  Chunk175333 = require("./175333.js"),
  Chunk242363 = require("./242363.jsx"),
  Chunk729843 = require("./729843.js"),
  Chunk996797 = require("./996797.js"),
  Chunk942236 = require("./942236.jsx"),
  Chunk102037 = require("./102037.jsx"),
  Chunk274372 = require("./274372.js"),
  Chunk747189 = require("./747189.jsx"),
  Chunk742984 = require("./742984.js"),
  Chunk764559 = require("./764559.jsx"),
  Chunk833551 = require("./833551.js"),
  Chunk592598 = require("./592598.js"),
  Chunk253932 = require("./253932.js"),
  Chunk164891 = require("./164891.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk803224 = require("./803224.js"),
  Chunk290863 = require("./290863.js"),
  Chunk309010 = require("./309010.js"),
  Chunk461213 = require("./461213.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk845618 = require("./845618.js"),
  Chunk242286 = require("./242286.js"),
  Chunk256415 = require("./256415.js"),
  Chunk927813 = require("./927813.js"),
  Chunk9302 = require("./9302.js"),
  Chunk157257 = require("./157257.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = new Chunk118356.Vy("LegacyOverlayNotificationsStore"),
  F = 5 * Chunk927813.A.Millis.SECOND,
  Z = 8 * Chunk927813.A.Millis.SECOND,
  J = 30 * Chunk927813.A.Millis.SECOND,
  X = Object.freeze({
    priority: 0,
    duration: F,
    expirationExternallyManaged: false,
    type: 0
  }),
  Q = [],
  q = (e, t, n) => {
    let i = t ? U.yFH.TIMED_OUT : U.yFH.DISMISSED;
    return setTimeout(() => d.A.updateNotificationStatus(e, i), null != n ? n : F)
  };

function $(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : U.yFH.DISMISSED;
  if (null == e) returnfalse;
  let n = Q.findIndex(t => t.id === e);
  if (false === n) returnfalse;
  let i = Q[n];
  clearTimeout(i.timerId), Q = [...Q], t === U.yFH.DISMISSED ? Q.splice(n, 1) : Q[n] = B(W({}, i), {
    status: t
  })
}

function ee(e) {
  let t = Q.length;
  return (Q = Q.filter(t => 1 !== t.type || t.channelId !== e)).length !== t
}

function et(e) {
  let t = Q.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function en(e, t) {
  let n = W({}, X, t);
  if (2 !== n.priority && !L.default.isInstanceFocused()) return null;
  let i = (0, l.A)(),
    r = W({
      id: i,
      status: U.yFH.ACTIVE,
      timerId: q(i, n.expirationExternallyManaged, n.duration),
      props: e
    }, n),
    s = (Q = [...Q]).findIndex(e => e.priority <= n.priority);
  return false === s ? Q.push(r) : Q.splice(s, 0, r), Q.length > 10 && clearTimeout(Q.pop().timerId), i
}

function ei(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = et(t);
  if (!n.includes(j.default.getId())) return $(i);
  if (null != i) returnfalse;
  let r = I.A.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !S.A.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayStartRinging"
    }).enabled || P.A.getStatus() === U.clD.DND || x.NO.getSetting()) returnfalse;
  let s = Q.find(e => 1 === e.type && e.channelId === t && e.messageType === U.lAJ.CALL);
  null != s && $(s.id), en((0, f.A)(r), {
    priority: 1,
    expirationExternallyManaged: true,
    type: 2,
    channelId: r.id
  })
}
class er extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(j.default, I.A, m.A, C.A, k.default, v.default, V.A, E.A, L.default, w.A, N.A, P.A, T.A, D.default)
  }
  getNotifications() {
    return Q
  }
}
H(er, "displayName", "OverlayNotificationsStore");
let es = new er(Chunk73153.h, !__OVERLAY__ ? {} : {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    $(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    if (v.default.hasChangedRenderMode(null != (t = k.default.getFocusedPID()) ? t : (0, G.getPID)())) return void Y.info("Overlay mounted, but render modes have changed", {
      nudges: n
    });
    let i = n[0];
    if (Y.info("Overlay mounted", {
        nudges: n,
        selectedNudge: i
      }), null == i) return;
    let r = function(e) {
      switch (e.type) {
        case z.Jr.GO_LIVE_VOICE:
        case z.Jr.GO_LIVE_NON_VOICE:
          return (0, p.A)(e);
        case z.Jr.KEYBIND_INDICATORS:
          return (0, _.A)(e);
        case z.Jr.NEWS:
        default:
          return (0, A.A)(e)
      }
    }(i);
    null != r && en(r, {
      priority: 2,
      duration: Z
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) returnfalse;
    Q = Q.map(e => e.status === U.yFH.ACTIVE ? (clearTimeout(e.timerId), B(W({}, e), {
      timerId: q(e.id, e.expirationExternallyManaged)
    })) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: r,
      message: l
    } = e, o = I.A.getChannel(r), a = D.default.getUser(null == (t = l.author) ? true : t.id);
    if (null == o || null == a) returnfalse;
    if ((null == (n = l.activity) ? true : n.type) === U.xL.JOIN || (null == (i = l.activity) ? true : i.type) === U.xL.JOIN_REQUEST) {
      if (!(0, O.lx)(l, r, true, true)) returnfalse;
      let e = function(e, t, n) {
        let i, r;
        if (s()(null != t.activity, "received null message activity"), n.id === j.default.getId()) returnfalse;
        let l = V.A.getGame();
        if (null == l) returnfalse;
        switch (t.activity.type) {
          case U.xL.JOIN:
            if (null == (i = w.A.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) returnfalse;
            r = (0, u.A)(e, t, n, l, i);
            break;
          case U.xL.JOIN_REQUEST:
            if (null == (i = P.A.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) returnfalse;
            r = (0, g.A)(e, n, l, i)
        }
        if (null == r) returnfalse;
        let o = en(r, {
          priority: 2,
          expirationExternallyManaged: true,
          channelId: e.id
        });
        return null != o && q(o, false, J), true
      }(o, l, a);
      if (false !== e) return e
    }
    if ((!L.default.isInstanceLocked() || L.default.isPinned(U.uss.TEXT)) && r === N.A.getChannelId() || E.A.isNotificationDisabled(z.KS.TextChat) || T.A.disableNotifications || !(0, O.lx)(l, r)) returnfalse;
    let c = !C.A.isSoundDisabled(R.cH);
    en((0, y.A)(o, l, a, c), {
      type: 1,
      channelId: o.id,
      messageType: l.type
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && ee(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ee(t)
  },
  CALL_CREATE: ei,
  CALL_UPDATE: ei,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    $(et(t))
  },
  GUILD_RING_START: ei,
  GUILD_RING_STOP: function(e) {
    let {
      channelId: t,
      guildId: n,
      ringing: i
    } = e;
    if (!S.A.getCurrentConfig({
        guildId: n,
        location: "OverlayStopRinging"
      }).enabled) returnfalse;
    i.includes(j.default.getId()) && $(et(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      s = V.A.getGame();
    return null != s && s.id === r && (n === U.xL.JOIN && (t = (0, h.A)(i, s)), null != t && void en(t, {
      priority: 2,
      type: 0
    }))
  },
  CLIPS_SAVE_CLIP_START: function(e) {
    "manual" === e.clipMethod && en((0, b.V)(K.intl.string(K.t.NBMK9m)))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    en((0, b.V)(K.intl.string(K.t["1ZbZuh"])))
  },
  STREAM_START: function(e) {
    let t = (0, b.t)();
    null != t && en(t)
  }
})