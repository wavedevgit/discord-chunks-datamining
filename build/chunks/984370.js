/** Chunk was on 51424 **/
n.d(t, {
  O: () => L,
  Z: () => Z
}), n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(873546),
  a = n(442837),
  s = n(475179),
  c = n(100527),
  u = n(906732),
  d = n(174556),
  _ = n(358221),
  E = n(185935),
  p = n(320007),
  m = n(540059),
  f = n(141321),
  h = n(2818),
  g = n(954551),
  O = n(208450),
  N = n(975146),
  I = n(979651),
  b = n(358085),
  T = n(998502),
  C = n(665149),
  S = n(300986),
  y = n(314451),
  P = n(35583),
  R = n(981631),
  A = n(176505),
  v = n(807505);

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function L() {
  if ((0, b.isMac)() && b.isPlatformEmbedded) {
    var e, t, n;
    let r = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === r ? T.ZP.minimize() : "Maximize" === r && T.ZP.maximize()
  }
}

function j(e) {
  let {
    children: t,
    className: n,
    channelId: i,
    channelType: l,
    guildId: c,
    innerClassname: u,
    transparent: b = !1,
    toolbar: T,
    mobileToolbar: x,
    "aria-label": D,
    "aria-labelledby": j,
    scrollable: k,
    role: M,
    hideSearch: Z,
    showDivider: U
  } = e, w = null == i || (0, A.AB)(i) ? null : i, V = (0, a.e7)([I.Z], () => I.Z.isInChannel(w) || !1), F = (0, a.e7)([_.Z], () => null != w && _.Z.getParticipantsListOpen(w)), {
    hasBugReporterAccess: G
  } = d.Z.useExperiment({
    location: "HeaderBar"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: W,
    inInbox: B
  } = h.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: H
  } = (0, E.Z)({
    location: "HeaderBar"
  }), z = (0, m.Q3)("HeaderBar");
  return (0, r.jsx)(C.ZP, {
    className: n,
    innerClassName: u,
    toolbar: function() {
      if (null == T) return null;
      let e = null != i && !Z;
      return o.tq ? x : (0, r.jsxs)(r.Fragment, {
        children: [T, e ? (0, r.jsx)(O.Z, {
          className: v.search
        }, null != c ? c : i) : null, U && (0, r.jsx)(C.ZP.Divider, {}), !z && (0, r.jsx)(P.Z, {}), !z && (0, r.jsx)(p.Z, {
          canShowReminder: !0
        }), !z && (0, r.jsx)(f.Z, {}), W && !B ? (0, r.jsx)(g.Z, {}) : null, !z && (G ? (0, r.jsx)(y.Z, {}) : (0, r.jsx)(S.Z, {})), H && V && null != w && !F && l === R.d4z.GROUP_DM && (0, r.jsxs)("div", {
          className: v.controlButtonWrapper,
          children: [(0, r.jsx)(C.ZP.Divider, {}), (0, r.jsx)(N.Z, {
            onClick: () => s.Z.toggleParticipantsList(w, !F)
          })]
        })]
      })
    }(),
    transparent: b,
    onDoubleClick: L,
    "aria-label": D,
    "aria-labelledby": j,
    role: M,
    scrollable: k,
    children: t
  })
}

function k(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": l,
    role: o
  } = e;
  return (0, r.jsx)(C.ZP, {
    className: n,
    onDoubleClick: L,
    "aria-label": i,
    "aria-labelledby": l,
    role: o,
    children: t
  })
}

function M(e) {
  var {
    isAuthenticated: t = !0
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["isAuthenticated"]);
  let {
    analyticsLocations: i
  } = (0, u.ZP)(c.Z.HEADER_BAR), o = l()(n.className, {
    [v.forumOrHome]: null != n.channelType && R.TPd.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === A.oC.GUILD_HOME
  });
  return (0, r.jsx)(u.Gt, {
    value: i,
    children: t ? (0, r.jsx)(j, D(x({}, n), {
      className: o
    })) : (0, r.jsx)(k, D(x({}, n), {
      className: o
    }))
  })
}
M.Title = C.ZP.Title, M.Icon = C.ZP.Icon, M.Divider = C.ZP.Divider, M.Caret = C.ZP.Caret;
let Z = M