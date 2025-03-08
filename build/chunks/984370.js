/** Chunk was on 74329 **/
n.d(t, {
  O: () => D,
  Z: () => Z
}), n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(873546),
  a = n(442837),
  s = n(475179),
  c = n(100527),
  u = n(906732),
  d = n(174556),
  _ = n(358221),
  p = n(185935),
  E = n(320007),
  f = n(540059),
  m = n(141321),
  h = n(2818),
  b = n(954551),
  g = n(208450),
  O = n(975146),
  N = n(979651),
  I = n(358085),
  C = n(998502),
  T = n(665149),
  S = n(300986),
  y = n(314451),
  v = n(35583),
  P = n(981631),
  R = n(176505),
  A = n(807505);

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

function j(e, t) {
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
async function D() {
  if ((0, I.isMac)() && I.isPlatformEmbedded) {
    var e, t, n;
    let r = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === r ? C.ZP.minimize() : "Maximize" === r && C.ZP.maximize()
  }
}

function L(e) {
  let {
    children: t,
    className: n,
    channelId: i,
    channelType: o,
    guildId: c,
    innerClassname: u,
    transparent: I = !1,
    toolbar: C,
    mobileToolbar: x,
    "aria-label": j,
    "aria-labelledby": L,
    scrollable: k,
    role: M,
    hideSearch: Z,
    showDivider: w
  } = e, U = null == i || (0, R.AB)(i) ? null : i, V = (0, a.e7)([N.Z], () => N.Z.isInChannel(U) || !1), F = (0, a.e7)([_.Z], () => null != U && _.Z.getParticipantsListOpen(U)), {
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
  } = (0, p.Z)({
    location: "HeaderBar"
  }), z = (0, f.Q3)("HeaderBar");
  return (0, r.jsx)(T.ZP, {
    className: n,
    innerClassName: u,
    toolbar: function() {
      if (null == C) return null;
      let e = null != i && !Z;
      return l.tq ? x : (0, r.jsxs)(r.Fragment, {
        children: [C, e ? (0, r.jsx)(g.Z, {
          className: A.search
        }, null != c ? c : i) : null, w && (0, r.jsx)(T.ZP.Divider, {}), !z && (0, r.jsx)(v.Z, {}), !z && (0, r.jsx)(E.Z, {
          canShowReminder: !0
        }), !z && (0, r.jsx)(m.Z, {}), W && !B ? (0, r.jsx)(b.Z, {}) : null, !z && (G ? (0, r.jsx)(y.Z, {}) : (0, r.jsx)(S.Z, {})), H && V && null != U && !F && o === P.d4z.GROUP_DM && (0, r.jsxs)("div", {
          className: A.controlButtonWrapper,
          children: [(0, r.jsx)(T.ZP.Divider, {}), (0, r.jsx)(O.Z, {
            onClick: () => s.Z.toggleParticipantsList(U, !F)
          })]
        })]
      })
    }(),
    transparent: I,
    onDoubleClick: D,
    "aria-label": j,
    "aria-labelledby": L,
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
    "aria-labelledby": o,
    role: l
  } = e;
  return (0, r.jsx)(T.ZP, {
    className: n,
    onDoubleClick: D,
    "aria-label": i,
    "aria-labelledby": o,
    role: l,
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
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["isAuthenticated"]);
  let {
    analyticsLocations: i
  } = (0, u.ZP)(c.Z.HEADER_BAR), l = o()(n.className, {
    [A.forumOrHome]: null != n.channelType && P.TPd.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === R.oC.GUILD_HOME
  });
  return (0, r.jsx)(u.Gt, {
    value: i,
    children: t ? (0, r.jsx)(L, j(x({}, n), {
      className: l
    })) : (0, r.jsx)(k, j(x({}, n), {
      className: l
    }))
  })
}
M.Title = T.ZP.Title, M.Icon = T.ZP.Icon, M.Divider = T.ZP.Divider, M.Caret = T.ZP.Caret;
let Z = M