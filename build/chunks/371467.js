/** Chunk was on 50751 **/
n.d(t, {
  Z: () => eo
}), n(47120), n(230036), n(733860), n(653041);
var i, r = n(512722),
  l = n.n(r),
  o = n(772848),
  a = n(442837),
  s = n(570140),
  u = n(13245),
  c = n(435064),
  d = n(786761),
  p = n(695346),
  h = n(163612),
  f = n(314897),
  m = n(592125),
  g = n(375954),
  O = n(292959),
  v = n(158776),
  y = n(885110),
  E = n(246946),
  b = n(594174),
  j = n(974180),
  x = n(237997),
  S = n(70956),
  I = n(150097),
  C = n(129724),
  N = n(145597),
  Z = n(371651),
  w = n(610394),
  P = n(340101),
  _ = n(388627),
  T = n(996050),
  D = n(609626),
  k = n(421824),
  A = n(777036),
  L = n(333727),
  R = n(585708),
  M = n(588909),
  W = n(981631),
  V = n(388032);

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
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
let G = 5 * S.Z.Millis.SECOND,
  Y = 8 * S.Z.Millis.SECOND,
  H = 30 * S.Z.Millis.SECOND,
  B = 30 * S.Z.Millis.SECOND,
  K = Object.freeze({
    timestamp: 0,
    priority: P.Tu.NORMAL,
    duration: G,
    expirationExternallyManaged: !1,
    type: P.kL.GENERIC
  }),
  Q = [],
  X = !1,
  J = [];

function q() {
  if (X && null == Q.find(e => e.status === W._1z.FOCUSED))
    for (let e of (X = !1, Q = [...Q, ...J], J = [], Q.length > 40 && (Q.length = 40), Q)) e.timer.start()
}

function $() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
  Q.filter(e => e.type === P.kL.TEXT && e.status === W._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
    (n >= e || t.timestamp < Date.now() - H) && ee(t.id, W._1z.DISMISSED)
  })
}

function ee(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W._1z.DISMISSED;
  if (null == e) return !1;
  let n = Q.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = Q[n];
  if (i.timer.stop(), Q = [...Q], t === W._1z.FOCUSED) {
    let [e] = Q.splice(n, 1);
    e = F(U({}, e), {
      status: t
    }), Q.unshift(e), X = !0;
    return
  }
  t === W._1z.DISMISSED ? Q.splice(n, 1) : Q[n] = F(U({}, i), {
    status: t
  }), q()
}

function et(e) {
  let t = Q.length,
    n = (Q = Q.filter(t => t.type !== P.kL.TEXT || t.channelId !== e)).length !== t;
  return n && q(), n
}

function en(e) {
  let t = Q.find(t => t.type === P.kL.INCOMING_CALL && t.channelId === e);
  return null != t ? t.id : null
}

function ei(e, t) {
  let n = U(F(U({}, K), {
      timestamp: Date.now()
    }), t),
    i = (0, o.Z)(),
    r = !1,
    l = U({
      id: i,
      status: W._1z.ACTIVE,
      timer: function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = -1;
        return {
          start() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
              l = r ? W._1z.TIMED_OUT : W._1z.DISMISSED; - 1 === i && (i = setTimeout(() => u.Z.updateNotificationStatus(e, l), null != n ? n : G))
          },
          stop() {
            clearTimeout(i), i = -1
          }
        }
      }(i, n.expirationExternallyManaged, n.duration),
      props: F(U({}, e), {
        onNotificationShow: () => {
          var t;
          r || (r = !0, null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i))
        }
      })
    }, n),
    a = X ? J : [...Q],
    s = a.findIndex(e => e.priority <= n.priority);
  if (-1 === s ? a.push(l) : a.splice(s, 0, l), a.length > 40) {
    let e = a.pop();
    X || e.timer.stop()
  }
  return X || (Q = a, l.timer.start()), i
}

function er(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = en(t);
  if (!n.includes(f.default.getId())) return ee(i);
  if (null != i) return !1;
  let r = m.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !h.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayV3StartRinging"
    }).enabled || y.Z.getStatus() === W.Skl.DND || p.QZ.getSetting()) return !1;
  let l = Q.find(e => e.type === P.kL.TEXT && e.channelId === t && e.messageType === W.uaV.CALL);
  null != l && ee(l.id), ei((0, A.Z)(r), {
    priority: P.Tu.HIGH,
    expirationExternallyManaged: !0,
    type: P.kL.INCOMING_CALL,
    channelId: r.id
  })
}
class el extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, b.default)
  }
  getNotifications() {
    return Q
  }
}
z(el, "displayName", "OverlayNotificationsStore");
let eo = new el(s.Z, {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    ee(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    $(0);
    let i = null !== (t = w.ZP.getFocusedPID()) && void 0 !== t ? t : N.UNSET_PID;
    if (Z.default.hasChangedRenderMode(i)) return;
    let r = (0, M.Z)((0, _.pL)(), n);
    null != r && ei(r, {
      priority: P.Tu.URGENT,
      type: P.kL.NUDGE,
      duration: Y
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) {
      for (let e of Q) e.status === W._1z.FOCUSED && ee(e.id, W._1z.ACTIVE);
      return !0
    }
    for (let e of ($(), Q)) e.type === P.kL.NUDGE ? ee(e.id, W._1z.DISMISSED) : e.status !== W._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (Q.length > 0) {
      var n;
      return ee(null === (n = Q.filter(e => e.type === P.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, W._1z.FOCUSED)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i, r;
    let {
      channelId: o,
      message: a
    } = e, s = m.Z.getChannel(o), u = b.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
    if (null == s || null == u) return !1;
    if ((null === (n = a.activity) || void 0 === n ? void 0 : n.type) === W.mFx.JOIN || (null === (i = a.activity) || void 0 === i ? void 0 : i.type) === W.mFx.JOIN_REQUEST) {
      if (!(0, I.eF)(a, o, !0, !0)) return !1;
      let e = function(e, t, n) {
        var i;
        let r, o;
        if (l()(null != t.activity, "received null message activity"), n.id === f.default.getId()) return !1;
        let a = (0, _.pL)(),
          s = null !== (i = null == a ? void 0 : a.altId) && void 0 !== i ? i : null == a ? void 0 : a.id;
        if (null == a || null == s) return !1;
        switch (t.activity.type) {
          case W.mFx.JOIN:
            if (null == (r = v.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
            o = (0, T.Z)(e, t, n, a, r);
            break;
          case W.mFx.JOIN_REQUEST:
            if (null == (r = y.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
            o = (0, L.Z)(e, n, a, r)
        }
        return null != o && (ei(o, {
          priority: P.Tu.URGENT,
          expirationExternallyManaged: !0,
          channelId: e.id,
          duration: B
        }), !0)
      }(s, a, u);
      if (!1 !== e) return e
    }
    if (x.default.getTextChatNotificationMode() === W.Ypu.DISABLED || E.Z.disableNotifications || !(0, I.eF)(a, o)) return !1;
    let c = !O.Z.isSoundDisabled(j.Ay),
      p = null !== (r = g.Z.getMessage(o, a.id)) && void 0 !== r ? r : (0, d.e5)(a);
    ei((0, R.Z)(s, p, u, c), {
      type: P.kL.TEXT,
      channelId: s.id,
      expirationExternallyManaged: !0,
      messageType: a.type
    }), $()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && et(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return et(t)
  },
  CALL_CREATE: er,
  CALL_UPDATE: er,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    ee(en(t))
  },
  GUILD_RING_START: er,
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
    i.includes(f.default.getId()) && ee(en(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      l = (0, _.pL)();
    return null != l && (null == l ? void 0 : l.id) != null && (l.id === r || l.altId === r) && (n === W.mFx.JOIN && (t = (0, D.Z)(i, l)), null != t && void ei(t, {
      priority: P.Tu.URGENT,
      type: P.kL.GENERIC
    }))
  },
  CLIPS_SAVE_CLIP_START: function() {
    ei((0, k.f)(V.NW.string(V.t.NBMK9v)))
  },
  CLIPS_SAVE_CLIP: function() {
    ei((0, k.f)(V.NW.format(V.t.KLhk6u, {
      duration: (0, C.A)(c.Z.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    ei((0, k.f)(V.NW.string(V.t["1ZbZur"])))
  },
  STREAM_START: function(e) {
    let t = (0, k.y)();
    null != t && ei(t)
  }
})