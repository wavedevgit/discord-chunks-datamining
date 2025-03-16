/** Chunk was on 50751 **/
n.d(t, {
  Z: () => eg
}), n(653041), n(47120), n(230036), n(733860);
var i, r = n(512722),
  l = n.n(r),
  o = n(772848),
  a = n(442837),
  s = n(570140),
  c = n(13245),
  u = n(435064),
  d = n(786761),
  p = n(695346),
  h = n(163612),
  f = n(314897),
  m = n(592125),
  g = n(375954),
  O = n(292959),
  v = n(649974),
  y = n(158776),
  E = n(699516),
  b = n(944486),
  j = n(885110),
  x = n(246946),
  I = n(594174),
  S = n(979651),
  C = n(974180),
  N = n(237997),
  Z = n(70956),
  w = n(150097),
  P = n(129724),
  _ = n(145597),
  T = n(32300),
  D = n(371651),
  k = n(610394),
  A = n(340101),
  L = n(388627),
  R = n(996050),
  W = n(609626),
  M = n(421824),
  V = n(777036),
  z = n(955978),
  U = n(333727),
  G = n(585708),
  F = n(588909),
  Y = n(981631),
  H = n(388032);

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
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
let X = 5 * Z.Z.Millis.SECOND,
  J = 8 * Z.Z.Millis.SECOND,
  q = 30 * Z.Z.Millis.SECOND,
  $ = 30 * Z.Z.Millis.SECOND,
  ee = Object.freeze({
    timestamp: 0,
    priority: A.Tu.NORMAL,
    duration: X,
    expirationExternallyManaged: !1,
    type: A.kL.GENERIC
  }),
  et = [],
  en = !1,
  ei = [],
  er = {};

function el(e, t, n) {
  null == er[e] && (er[e] = {}), er[e][t] = n
}
let eo = 30 * Z.Z.Millis.MINUTE,
  ea = 2 * Z.Z.Millis.MINUTE;

function es() {
  if (en && null == et.find(e => e.status === Y._1z.FOCUSED))
    for (let e of (en = !1, et = [...et, ...ei], ei = [], et.length > 40 && (et.length = 40), et)) e.timer.start()
}

function ec() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
  et.filter(e => e.type === A.kL.TEXT && e.status === Y._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
    (n >= e || t.timestamp < Date.now() - q) && eu(t.id, Y._1z.DISMISSED)
  })
}

function eu(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y._1z.DISMISSED;
  if (null == e) return !1;
  let n = et.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = et[n];
  if (i.timer.stop(), et = [...et], t === Y._1z.FOCUSED) {
    let [e] = et.splice(n, 1);
    e = K(Q({}, e), {
      status: t
    }), et.unshift(e), en = !0;
    return
  }
  t === Y._1z.DISMISSED ? et.splice(n, 1) : et[n] = K(Q({}, i), {
    status: t
  }), es()
}

function ed(e) {
  let t = et.find(t => t.type === A.kL.INCOMING_CALL && t.channelId === e);
  return null != t ? t.id : null
}

function ep(e, t) {
  let n = Q(K(Q({}, ee), {
      timestamp: Date.now()
    }), t),
    i = (0, o.Z)(),
    r = !1,
    l = Q({
      id: i,
      status: Y._1z.ACTIVE,
      timer: function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = -1;
        return {
          start() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
              l = r ? Y._1z.TIMED_OUT : Y._1z.DISMISSED; - 1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, l), null != n ? n : X))
          },
          stop() {
            clearTimeout(i), i = -1
          }
        }
      }(i, n.expirationExternallyManaged, n.duration),
      props: K(Q({}, e), {
        onNotificationShow: () => {
          var t;
          r || (r = !0, null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i))
        }
      })
    }, n),
    a = en ? ei : [...et],
    s = a.findIndex(e => e.priority <= n.priority);
  if (-1 === s ? a.push(l) : a.splice(s, 0, l), a.length > 40) {
    let e = a.pop();
    en || e.timer.stop()
  }
  return en || (et = a, l.timer.start()), i
}

function eh() {
  if (!(0, T.Yo)("OverlayNotificationStore")) return !1;
  let e = v.Z.usersPlaying,
    t = new Set,
    n = function() {
      let e = [];
      for (let t in er) e.push(...Object.keys(er[t]).map(e => e));
      return e
    }(),
    i = !1;
  for (let [n, r] of Object.entries(e)) i = i || function(e, t) {
    var n, i;
    if (!E.Z.isFriend(e)) return !1;
    let r = t.gameId;
    if (null == r) return !1;
    let l = null === (n = v.Z.getNowPlaying(r)[e]) || void 0 === n ? void 0 : n.activity;
    if (null == l || l.type !== Y.IIU.PLAYING || ! function(e) {
        var t;
        let n = (null === (t = e.timestamps) || void 0 === t ? void 0 : t.start) != null ? e.timestamps.start : e.created_at;
        return null != n && Date.now() - n < ea
      }(l)) return !1;
    let o = b.Z.getVoiceChannelId(),
      a = null === (i = S.Z.getDiscoverableVoiceStateForUser(e)) || void 0 === i ? void 0 : i.channelId;
    if (null != o && null != a && o === a) return !1;
    let s = (0, L.pL)();
    return null != s && s.id === r && (! function(e, t) {
      var n, i;
      let r = null === (n = null === (i = er[e]) || void 0 === i ? void 0 : i[t]) || void 0 === n ? void 0 : n.lastSentTimestamp;
      return null == r || Date.now() - r > eo
    }(r, e) ? (el(r, e, {
      userId: e,
      gameId: r,
      lastSentTimestamp: Date.now()
    }), !1) : (function(e, t, n) {
      let i = (0, z.Z)(t, e, n);
      null != i && (el(e, t, {
        userId: t,
        gameId: e,
        lastSentTimestamp: Date.now()
      }), ep(i, {
        type: A.kL.GENERIC,
        priority: A.Tu.NORMAL
      }))
    }(r, e, l), !0))
  }(n, r), t.add(n);
  let r = new Set;
  for (let e of n) t.has(e) || r.add(e);
  let l = k.ZP.isOverlayV3EnabledForPID((0, _.getPID)()) || null != k.ZP.getFocusedPID();
  for (let e of r)(function(e) {
    let t = y.Z.getActivities(e);
    if (0 === t.length) return !1;
    let n = (0, L.pL)();
    return null != n && null != t.find(e => e.application_id === n.id)
  })(e) || l || (! function(e) {
    for (let t in er) {
      let n = er[t][e];
      null != n && (n.lastSentTimestamp = null)
    }
  }(e), i = !0);
  return i
}

function ef(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ed(t);
  if (!n.includes(f.default.getId())) return eu(i);
  if (null != i) return !1;
  let r = m.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !h.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayV3StartRinging"
    }).enabled || j.Z.getStatus() === Y.Skl.DND || p.QZ.getSetting()) return !1;
  let l = et.find(e => e.type === A.kL.TEXT && e.channelId === t && e.messageType === Y.uaV.CALL);
  null != l && eu(l.id), ep((0, V.Z)(r), {
    priority: A.Tu.HIGH,
    expirationExternallyManaged: !0,
    type: A.kL.INCOMING_CALL,
    channelId: r.id
  })
}
class em extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, I.default, v.Z), this.syncWith([v.Z], eh)
  }
  getNotifications() {
    return et
  }
}
B(em, "displayName", "OverlayNotificationsStore");
let eg = new em(s.Z, {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    eu(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    ec(0);
    let i = null !== (t = k.ZP.getFocusedPID()) && void 0 !== t ? t : _.UNSET_PID;
    if (D.default.hasChangedRenderMode(i)) return;
    let r = (0, F.Z)((0, L.pL)(), n);
    null != r && ep(r, {
      priority: A.Tu.URGENT,
      type: A.kL.NUDGE,
      duration: J
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) {
      for (let e of et) e.status === Y._1z.FOCUSED && eu(e.id, Y._1z.ACTIVE);
      return !0
    }
    for (let e of (ec(), et)) e.type === A.kL.NUDGE ? eu(e.id, Y._1z.DISMISSED) : e.status !== Y._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (et.length > 0) {
      var n;
      return eu(null === (n = et.filter(e => e.type === A.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, Y._1z.FOCUSED)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i, r;
    let {
      channelId: o,
      message: a
    } = e, s = m.Z.getChannel(o), c = I.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
    if (null == s || null == c) return !1;
    if ((null === (n = a.activity) || void 0 === n ? void 0 : n.type) === Y.mFx.JOIN || (null === (i = a.activity) || void 0 === i ? void 0 : i.type) === Y.mFx.JOIN_REQUEST) {
      if (!(0, w.eF)(a, o, !0, !0)) return !1;
      let e = function(e, t, n) {
        var i;
        let r, o;
        if (l()(null != t.activity, "received null message activity"), n.id === f.default.getId()) return !1;
        let a = (0, L.pL)(),
          s = null !== (i = null == a ? void 0 : a.altId) && void 0 !== i ? i : null == a ? void 0 : a.id;
        if (null == a || null == s) return !1;
        switch (t.activity.type) {
          case Y.mFx.JOIN:
            if (null == (r = y.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
            o = (0, R.Z)(e, t, n, a, r);
            break;
          case Y.mFx.JOIN_REQUEST:
            if (null == (r = j.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
            o = (0, U.Z)(e, n, a, r)
        }
        return null != o && (ep(o, {
          priority: A.Tu.URGENT,
          expirationExternallyManaged: !0,
          channelId: e.id,
          duration: $
        }), !0)
      }(s, a, c);
      if (!1 !== e) return e
    }
    if (N.default.getTextChatNotificationMode() === Y.Ypu.DISABLED || x.Z.disableNotifications || !(0, w.eF)(a, o)) return !1;
    let u = !O.Z.isSoundDisabled(C.Ay),
      p = null !== (r = g.Z.getMessage(o, a.id)) && void 0 !== r ? r : (0, d.e5)(a);
    ep((0, G.Z)(s, p, c, u), {
      type: A.kL.TEXT,
      channelId: s.id,
      expirationExternallyManaged: !0,
      messageType: a.type
    }), ec()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && function(e) {
      let t = et.length,
        n = (et = et.filter(t => t.type !== A.kL.TEXT || t.channelId !== e)).length !== t;
      return n && es(), n
    }(t)
  },
  MESSAGE_ACK: function() {},
  CALL_CREATE: ef,
  CALL_UPDATE: ef,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    eu(ed(t))
  },
  GUILD_RING_START: ef,
  GUILD_RING_STOP: function(e) {
    let {
      channelId: t,
      guildId: n,
      ringing: i
    } = e;
    if (!h.Z.getCurrentConfig({
        guildId: n,
        location: "OverlayV3StopRinging"
      }).enabled) return !1;
    i.includes(f.default.getId()) && eu(ed(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      l = (0, L.pL)();
    return null != l && (null == l ? void 0 : l.id) != null && (l.id === r || l.altId === r) && (n === Y.mFx.JOIN && (t = (0, W.Z)(i, l)), null != t && void ep(t, {
      priority: A.Tu.URGENT,
      type: A.kL.GENERIC
    }))
  },
  CLIPS_SAVE_CLIP_START: function() {
    ep((0, M.f)(H.NW.string(H.t.NBMK9v)))
  },
  CLIPS_SAVE_CLIP: function() {
    ep((0, M.f)(H.NW.format(H.t.KLhk6u, {
      duration: (0, P.A)(u.Z.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    ep((0, M.f)(H.NW.string(H.t["1ZbZur"])))
  },
  STREAM_START: function(e) {
    let t = (0, M.y)();
    null != t && ep(t)
  }
})