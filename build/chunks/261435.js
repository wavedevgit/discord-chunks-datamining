/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => ea
}), n(47120), n(653041);
var i, r = n(512722),
  s = n.n(r),
  o = n(772848),
  a = n(442837),
  l = n(570140),
  c = n(13245),
  d = n(836932),
  u = n(175553),
  h = n(158979),
  p = n(181912),
  f = n(877183),
  g = n(791288),
  m = n(194295),
  y = n(998033),
  _ = n(181364),
  v = n(435064),
  O = n(668761),
  b = n(86071),
  x = n(358446),
  S = n(371651),
  E = n(695346),
  j = n(163612),
  N = n(314897),
  C = n(592125),
  I = n(292959),
  Z = n(158776),
  P = n(944486),
  w = n(885110),
  k = n(246946),
  T = n(594174),
  D = n(974180),
  M = n(808506),
  R = n(237997),
  A = n(70956),
  L = n(150097),
  z = n(129724),
  W = n(709054),
  V = n(145597),
  B = n(449224),
  U = n(981631),
  G = n(987650),
  F = n(388032);

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Y(e) {
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
let X = 5 * A.Z.Millis.SECOND,
  J = 8 * A.Z.Millis.SECOND,
  Q = 30 * A.Z.Millis.SECOND,
  q = Object.freeze({
    priority: 0,
    duration: X,
    expirationExternallyManaged: !1,
    type: 0
  }),
  $ = [],
  ee = (e, t, n) => {
    let i = t ? U._1z.TIMED_OUT : U._1z.DISMISSED;
    return setTimeout(() => c.Z.updateNotificationStatus(e, i), null != n ? n : X)
  };

function et(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U._1z.DISMISSED;
  if (null == e) return !1;
  let n = $.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = $[n];
  clearTimeout(i.timerId), $ = [...$], t === U._1z.DISMISSED ? $.splice(n, 1) : $[n] = K(Y({}, i), {
    status: t
  })
}

function en(e) {
  let t = $.length;
  return ($ = $.filter(t => 1 !== t.type || t.channelId !== e)).length !== t
}

function ei(e) {
  let t = $.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function er(e, t) {
  let n = Y({}, q, t);
  if (2 !== n.priority && !R.default.isInstanceFocused()) return null;
  let i = (0, o.Z)(),
    r = Y({
      id: i,
      status: U._1z.ACTIVE,
      timerId: ee(i, n.expirationExternallyManaged, n.duration),
      props: e
    }, n),
    s = ($ = [...$]).findIndex(e => e.priority <= n.priority);
  return -1 === s ? $.push(r) : $.splice(s, 0, r), $.length > 10 && clearTimeout($.pop().timerId), i
}

function es(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ei(t);
  if (!n.includes(N.default.getId())) return et(i);
  if (null != i) return !1;
  let r = C.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !j.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayStartRinging"
    }).enabled || w.Z.getStatus() === U.Skl.DND || E.QZ.getSetting()) return !1;
  let s = $.find(e => 1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL);
  null != s && et(s.id), er((0, p.Z)(r), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: r.id
  })
}
class eo extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(C.Z, T.default)
  }
  getNotifications() {
    return $
  }
}
H(eo, "displayName", "OverlayNotificationsStore");
let ea = new eo(l.Z, {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    et(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    if (S.default.hasChangedRenderMode(null !== (t = M.default.getFocusedPID()) && void 0 !== t ? t : (0, V.getPID)())) return;
    let i = function(e) {
      switch (e.type) {
        case G.nc.OOP_WELCOME:
          return (0, f.Z)(e);
        case G.nc.GO_LIVE_VOICE:
        case G.nc.GO_LIVE_NON_VOICE:
          return (0, h.Z)(e);
        case G.nc.KEYBIND_INDICATORS:
          return (0, x.Z)(e);
        case G.nc.NEWS:
        default:
          return (0, _.Z)(e)
      }
    }(n[0]);
    null != i && er(i, {
      priority: 2,
      duration: J
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) return !1;
    $ = $.map(e => e.status === U._1z.ACTIVE ? (clearTimeout(e.timerId), K(Y({}, e), {
      timerId: ee(e.id, e.expirationExternallyManaged)
    })) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: r,
      message: o
    } = e, a = C.Z.getChannel(r), l = T.default.getUser(null === (t = o.author) || void 0 === t ? void 0 : t.id);
    if (null == a || null == l) return !1;
    if ((null === (n = o.activity) || void 0 === n ? void 0 : n.type) === U.mFx.JOIN || (null === (i = o.activity) || void 0 === i ? void 0 : i.type) === U.mFx.JOIN_REQUEST) {
      if (!(0, L.eF)(o, r, !0, !0)) return !1;
      let e = function(e, t, n) {
        let i, r;
        if (s()(null != t.activity, "received null message activity"), n.id === N.default.getId()) return !1;
        let o = B.Z.getGame();
        if (null == o) return !1;
        switch (t.activity.type) {
          case U.mFx.JOIN:
            if (null == (i = Z.Z.getApplicationActivity(n.id, o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            r = (0, d.Z)(e, t, n, o, i);
            break;
          case U.mFx.JOIN_REQUEST:
            if (null == (i = w.Z.getApplicationActivity(o.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            r = (0, m.Z)(e, n, o, i)
        }
        if (null == r) return !1;
        let a = er(r, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id
        });
        return null != a && ee(a, !1, Q), !0
      }(a, o, l);
      if (!1 !== e) return e
    }
    if ((!R.default.isInstanceLocked() || R.default.isPinned(U.Odu.TEXT)) && r === P.Z.getChannelId() || R.default.getTextChatNotificationMode() === U.Ypu.DISABLED || k.Z.disableNotifications || !(0, L.eF)(o, r)) return !1;
    let c = !I.Z.isSoundDisabled(D.Ay);
    er((0, y.Z)(a, o, l, c), {
      type: 1,
      channelId: a.id,
      messageType: o.type
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && en(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return en(t)
  },
  CALL_CREATE: es,
  CALL_UPDATE: es,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    et(ei(t))
  },
  GUILD_RING_START: es,
  GUILD_RING_STOP: function(e) {
    let {
      channelId: t,
      guildId: n,
      ringing: i
    } = e;
    if (!j.Z.getCurrentConfig({
        guildId: n,
        location: "OverlayStopRinging"
      }).enabled) return !1;
    i.includes(N.default.getId()) && et(ei(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      s = B.Z.getGame();
    return null != s && s.id === r && (n === U.mFx.JOIN && (t = (0, u.Z)(i, s)), null != t && void er(t, {
      priority: 2,
      type: 0
    }))
  },
  CLIPS_SAVE_CLIP_START: function() {
    er((0, O.f)(F.NW.string(F.t.NBMK9v)))
  },
  CLIPS_SAVE_CLIP: function() {
    er((0, O.f)(F.NW.formatToPlainString(F.t.KLhk6u, {
      duration: (0, z.A)(v.Z.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    er((0, O.f)(F.NW.string(F.t["1ZbZur"])))
  },
  STREAM_START: function(e) {
    let t = (0, O.y)();
    null != t && er(t)
  },
  OVERLAY_CONTENT_INVENTORY_READY: function(e) {
    var t;
    let {
      contentInventoryEntries: n
    } = e;
    if (0 === n.length || !R.default.showInviteNotification || S.default.hasChangedRenderMode(null !== (t = M.default.getFocusedPID()) && void 0 !== t ? t : (0, V.getPID)())) return;
    let i = B.Z.getGame();
    if (null == i) return;
    let {
      enabled: r,
      dateLookbackMs: s
    } = b.Z.getCurrentConfig({
      location: "OverlayNotificationsStore"
    });
    if (!r) return;
    let o = n;
    null != s && (o = o.filter(e => W.default.age(e.id) < s)), 0 !== o.length && er((0, g.Z)(i, o), {
      priority: 2,
      type: "content-inventory",
      expirationExternallyManaged: !0,
      duration: J
    })
  }
})