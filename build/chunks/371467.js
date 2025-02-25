/** Chunk was on 50751 **/
n.d(t, {
  Z: () => eo
}), n(47120), n(230036), n(733860), n(653041);
var i, r = n(512722),
  o = n.n(r),
  l = n(772848),
  s = n(442837),
  a = n(570140),
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
  x = n(974180),
  j = n(237997),
  S = n(70956),
  I = n(150097),
  C = n(129724),
  Z = n(145597),
  N = n(371651),
  w = n(610394),
  _ = n(388627),
  P = n(996050),
  T = n(609626),
  A = n(421824),
  D = n(777036),
  k = n(333727),
  L = n(585708),
  R = n(588909),
  M = n(981631),
  W = n(388032);

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
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
let F = 5 * S.Z.Millis.SECOND,
  G = 8 * S.Z.Millis.SECOND,
  Y = 30 * S.Z.Millis.SECOND,
  B = 30 * S.Z.Millis.SECOND,
  H = Object.freeze({
    timestamp: 0,
    priority: 0,
    duration: F,
    expirationExternallyManaged: !1,
    type: 0
  }),
  Q = [],
  K = !1,
  X = [];

function J() {
  if (K && null == Q.find(e => e.status === M._1z.FOCUSED))
    for (let e of (K = !1, Q = [...Q, ...X], X = [], Q.length > 40 && (Q.length = 40), Q)) e.timer.start()
}

function q() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
  Q.filter(e => 1 === e.type && e.status === M._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
    (n >= e || t.timestamp < Date.now() - Y) && $(t.id, M._1z.DISMISSED)
  })
}

function $(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M._1z.DISMISSED;
  if (null == e) return !1;
  let n = Q.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = Q[n];
  if (i.timer.stop(), Q = [...Q], t === M._1z.FOCUSED) {
    let [e] = Q.splice(n, 1);
    e = U(z({}, e), {
      status: t
    }), Q.unshift(e), K = !0;
    return
  }
  t === M._1z.DISMISSED ? Q.splice(n, 1) : Q[n] = U(z({}, i), {
    status: t
  }), J()
}

function ee(e) {
  let t = Q.length,
    n = (Q = Q.filter(t => 1 !== t.type || t.channelId !== e)).length !== t;
  return n && J(), n
}

function et(e) {
  let t = Q.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function en(e, t) {
  let n = z(U(z({}, H), {
      timestamp: Date.now()
    }), t),
    i = (0, l.Z)(),
    r = !1,
    o = z({
      id: i,
      status: M._1z.ACTIVE,
      timer: function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = -1;
        return {
          start() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
              o = r ? M._1z.TIMED_OUT : M._1z.DISMISSED; - 1 === i && (i = setTimeout(() => u.Z.updateNotificationStatus(e, o), null != n ? n : F))
          },
          stop() {
            clearTimeout(i), i = -1
          }
        }
      }(i, n.expirationExternallyManaged, n.duration),
      props: U(z({}, e), {
        onNotificationShow: () => {
          var t;
          r || (r = !0, null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i))
        }
      })
    }, n),
    s = K ? X : [...Q],
    a = s.findIndex(e => e.priority <= n.priority);
  if (-1 === a ? s.push(o) : s.splice(a, 0, o), s.length > 40) {
    let e = s.pop();
    K || e.timer.stop()
  }
  return K || (Q = s, o.timer.start()), i
}

function ei(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = et(t);
  if (!n.includes(f.default.getId())) return $(i);
  if (null != i) return !1;
  let r = m.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !h.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayV3StartRinging"
    }).enabled || y.Z.getStatus() === M.Skl.DND || p.QZ.getSetting()) return !1;
  let o = Q.find(e => 1 === e.type && e.channelId === t && e.messageType === M.uaV.CALL);
  null != o && $(o.id), en((0, D.Z)(r), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: r.id
  })
}
class er extends(i = s.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, b.default)
  }
  getNotifications() {
    return Q
  }
}
V(er, "displayName", "OverlayNotificationsStore");
let eo = new er(a.Z, {
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
    q(0);
    let i = null !== (t = w.ZP.getFocusedPID()) && void 0 !== t ? t : Z.R2;
    if (N.default.hasChangedRenderMode(i)) return;
    let r = (0, R.Z)((0, _.pL)(), n);
    null != r && en(r, {
      priority: 2,
      type: 3,
      duration: G
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) {
      for (let e of Q) e.status === M._1z.FOCUSED && $(e.id, M._1z.ACTIVE);
      return !0
    }
    for (let e of (q(), Q)) 3 === e.type ? $(e.id, M._1z.DISMISSED) : e.status !== M._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (Q.length > 0) {
      var n;
      return $(null === (n = Q.filter(e => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, M._1z.FOCUSED)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i, r;
    let {
      channelId: l,
      message: s
    } = e, a = m.Z.getChannel(l), u = b.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
    if (null == a || null == u) return !1;
    if ((null === (n = s.activity) || void 0 === n ? void 0 : n.type) === M.mFx.JOIN || (null === (i = s.activity) || void 0 === i ? void 0 : i.type) === M.mFx.JOIN_REQUEST) {
      if (!(0, I.eF)(s, l, !0, !0)) return !1;
      let e = function(e, t, n) {
        var i;
        let r, l;
        if (o()(null != t.activity, "received null message activity"), n.id === f.default.getId()) return !1;
        let s = (0, _.pL)(),
          a = null !== (i = null == s ? void 0 : s.altId) && void 0 !== i ? i : null == s ? void 0 : s.id;
        if (null == s || null == a) return !1;
        switch (t.activity.type) {
          case M.mFx.JOIN:
            if (null == (r = v.Z.getApplicationActivity(n.id, a)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
            l = (0, P.Z)(e, t, n, s, r);
            break;
          case M.mFx.JOIN_REQUEST:
            if (null == (r = y.Z.getApplicationActivity(a)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
            l = (0, k.Z)(e, n, s, r)
        }
        return null != l && (en(l, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id,
          duration: B
        }), !0)
      }(a, s, u);
      if (!1 !== e) return e
    }
    if (j.Z.getTextChatNotificationMode() === M.Ypu.DISABLED || E.Z.disableNotifications || !(0, I.eF)(s, l)) return !1;
    let c = !O.Z.isSoundDisabled(x.Ay),
      p = null !== (r = g.Z.getMessage(l, s.id)) && void 0 !== r ? r : (0, d.e5)(s);
    en((0, L.Z)(a, p, u, c), {
      type: 1,
      channelId: a.id,
      expirationExternallyManaged: !0,
      messageType: s.type
    }), q()
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
    if (!h.Z.getCurrentConfig({
        guildId: n,
        location: "OverlayV3StopRinging"
      }).enabled) return !1;
    i.includes(f.default.getId()) && $(et(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      o = (0, _.pL)();
    return null != o && (null == o ? void 0 : o.id) != null && (o.id === r || o.altId === r) && (n === M.mFx.JOIN && (t = (0, T.Z)(i, o)), null != t && void en(t, {
      priority: 2,
      type: 0
    }))
  },
  CLIPS_SAVE_CLIP_START: function() {
    en((0, A.f)(W.NW.string(W.t.NBMK9v)))
  },
  CLIPS_SAVE_CLIP: function() {
    en((0, A.f)(W.NW.format(W.t.KLhk6u, {
      duration: (0, C.A)(c.Z.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    en((0, A.f)(W.NW.string(W.t["1ZbZur"])))
  },
  STREAM_START: function(e) {
    let t = (0, A.y)();
    null != t && en(t)
  }
})