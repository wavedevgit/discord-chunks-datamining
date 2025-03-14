/** Chunk was on 50751 **/
n.d(t, {
  Z: () => k
}), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  u = n(239091),
  c = n(765250),
  d = n(393238),
  p = n(358221),
  h = n(933557),
  f = n(352978),
  m = n(27457),
  g = n(796638),
  O = n(592125),
  v = n(131951),
  y = n(944486),
  E = n(237997),
  b = n(444295),
  j = n(906037),
  x = n(804570),
  S = n(501787),
  I = n(981631),
  C = n(65154),
  N = n(388032),
  Z = n(989424);

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function P(e, t) {
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

function _(e) {
  var t;
  let {
    participant: n,
    channel: r,
    context: l
  } = e, o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
  return (0, a.e7)([v.Z], () => null != n.user && null != l && null != r && v.Z.isLocalVideoDisabled(o, l), [o, n.user, l, r]) ? null : (0, i.jsx)(m.ZP, w({}, e))
}

function T(e) {
  let {
    context: t = C.Yn.DEFAULT,
    participants: l,
    locked: o,
    channel: a,
    width: s,
    height: c,
    shouldDisplay: d
  } = e, p = (e, r) => {
    let l = e.user;
    (0, b.Ws)(I.Odu.VIDEO, {
      type: b.Qu.CAMERA,
      value: b.bk.SETTINGS_OPENED,
      userId: null == l ? void 0 : l.id
    }), (0, u.jW)(r, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
      return n => (0, i.jsx)(e, P(w({}, n), {
        user: l,
        mediaEngineContext: t,
        onWatchStream: () => {
          (0, b.Ws)(I.Odu.VIDEO, {
            type: b.Qu.GO_LIVE,
            value: b.bk.ENABLED,
            userId: null == l ? void 0 : l.id
          })
        }
      }))
    })
  }, h = (0, b.ee)(() => new Set(l.map(e => {
    var t;
    return null === (t = e.user) || void 0 === t ? void 0 : t.id
  })), [l]);
  return r.useEffect(() => {
    d && (0, b.zi)(I.Odu.VIDEO, {
      locked: E.default.isInstanceLocked(),
      shownUserIds: Array.from(h),
      liveUserIds: Array.from(h),
      contentInventoryIds: []
    })
  }, [h, d]), (0, i.jsx)(i.Fragment, {
    children: l.map(e => (0, i.jsx)(_, {
      participant: e,
      width: s,
      className: Z.tile,
      containerStyle: {
        width: s,
        height: c
      },
      fit: f.L.COVER,
      channel: a,
      inPopout: !0,
      inCall: !0,
      noBorder: !0,
      onContextMenu: o ? void 0 : p,
      forceIdle: o,
      paused: !d,
      inOverlayPopout: !0,
      context: t
    }, e.id))
  })
}

function D(e) {
  let {
    context: t = C.Yn.DEFAULT,
    participants: n,
    participantsVersion: l,
    locked: a,
    widget: u,
    channel: c,
    width: d,
    height: p,
    showEmpty: h = !0,
    containerRef: f
  } = e, m = "boolean" != typeof u.meta.horizontal || u.meta.horizontal, g = n.length > 0 && null != t && null != c && (!a || u.pinned);
  return (r.useEffect(() => {
    (0, j.m3)({
      locked: a,
      pinned: u.pinned,
      widget: u.type,
      isPreviewingInGame: !1
    }, g)
  }, [a, u, g]), 0 !== n.length || a) ? null == c ? null : (0, i.jsx)("div", {
    ref: f,
    className: o()({
      [Z.videoList]: !0,
      [Z.vertical]: !m,
      [Z.hidden]: !g && a
    }),
    style: {
      opacity: u.opacity
    },
    children: (0, i.jsx)(T, {
      context: t,
      participants: n,
      locked: a,
      channel: c,
      width: d,
      height: p,
      shouldDisplay: g,
      participantsVersion: l
    })
  }) : h ? a ? null : (0, i.jsx)("div", {
    ref: f,
    children: (0, i.jsx)(x.E, {
      emptyText: N.NW.string(N.t["aTiM4+"]),
      icon: s.Odl,
      absolute: !0
    })
  }) : null
}

function k(e) {
  let t = (0, a.e7)([y.Z, O.Z], () => O.Z.getChannel(y.Z.getVoiceChannelId())),
    n = (0, h.ZP)(t),
    l = null == t ? void 0 : t.id,
    o = (0, a.Wu)([p.Z], () => null != l ? p.Z.getVideoParticipants(l) : []),
    s = (0, a.e7)([p.Z], () => null != l ? p.Z.getParticipantsVersion(l) : 0),
    u = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
    {
      width: f,
      height: m,
      ref: v
    } = (0, d.Z)(e.locked, e.widget.pinned),
    {
      participantTileWidth: E,
      visibleParticipants: b
    } = (0, g.ZB)(u ? null != f ? f : e.width : null != m ? m : e.height, o, {
      tileWidth: S.vZ,
      tileMinWidth: S.mo,
      tileMargin: S.F$,
      limit: 8,
      cropSelfVideo: !0,
      version: s
    }),
    j = {
      id: e.widget.id,
      size: e.widget.size,
      containerWidth: e.width,
      containerHeight: e.height
    },
    x = r.useRef(j);
  return r.useLayoutEffect(() => void(x.current = j)), r.useLayoutEffect(() => {
    let {
      size: e,
      id: t,
      containerWidth: n,
      containerHeight: i
    } = x.current;
    (u && e.height > e.width || !u && e.width > e.height) && (0, c.nv)({
      widgetId: t,
      size: {
        fixed: !0,
        width: i,
        height: n
      }
    })
  }, [u]), (0, i.jsx)(D, P(w({}, e), {
    channel: t,
    title: null != n ? n : "",
    participants: b,
    participantsVersion: s,
    width: u ? E : null != f ? f : e.width,
    height: u ? null != m ? m : e.height : E,
    containerRef: v
  }))
}