/** Chunk was on 27632 **/
n.d(t, {
  O: () => k,
  Z: () => v
}), n(35282);
var r = n(255367);
n(73800);
var i = n(120356),
  l = n.n(i),
  o = n(873546),
  a = n(442837),
  s = n(475179),
  c = n(100527),
  u = n(906732),
  E = n(174556),
  d = n(358221),
  _ = n(185935),
  I = n(320007),
  O = n(540059),
  T = n(141321),
  N = n(2818),
  S = n(954551),
  R = n(208450),
  p = n(975146),
  A = n(979651),
  P = n(358085),
  C = n(998502),
  f = n(665149),
  D = n(300986),
  m = n(314451),
  g = n(35583),
  y = n(981631),
  h = n(176505),
  U = n(806411);

function b(e) {
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

function M(e, t) {
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
async function k() {
  if ((0, P.isMac)() && P.isPlatformEmbedded) {
    var e, t, n;
    let r = null != (n = await (null == (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : e.call(t))) ? n : "Maximize";
    "Minimize" === r ? C.ZP.minimize() : "Maximize" === r && C.ZP.maximize()
  }
}

function Z(e) {
  let {
    children: t,
    className: n,
    channelId: i,
    channelType: l,
    guildId: c,
    innerClassname: u,
    transparent: P = !1,
    toolbar: C,
    mobileToolbar: b,
    "aria-label": M,
    "aria-labelledby": Z,
    scrollable: L,
    role: j,
    hideSearch: v,
    showDivider: F
  } = e, V = null == i || (0, h.AB)(i) ? null : i, x = (0, a.e7)([A.Z], () => A.Z.isInChannel(V) || !1), G = (0, a.e7)([d.Z], () => null != V && d.Z.getParticipantsListOpen(V)), {
    hasBugReporterAccess: w
  } = E.Z.useExperiment({
    location: "HeaderBar"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: B,
    inInbox: z
  } = N.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: W
  } = (0, _.Z)({
    location: "HeaderBar"
  }), Y = (0, O.Q3)("HeaderBar");
  return (0, r.jsx)(f.ZP, {
    className: n,
    innerClassName: u,
    toolbar: function() {
      if (null == C) return null;
      let e = null != i && !v;
      return o.tq ? b : (0, r.jsxs)(r.Fragment, {
        children: [C, e ? (0, r.jsx)(R.Z, {
          className: U.search
        }, null != c ? c : i) : null, F && (0, r.jsx)(f.ZP.Divider, {}), !Y && (0, r.jsx)(g.Z, {}), !Y && (0, r.jsx)(I.Z, {
          canShowReminder: !0
        }), !Y && (0, r.jsx)(T.Z, {}), B && !z ? (0, r.jsx)(S.Z, {}) : null, !Y && (w ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(D.Z, {})), W && x && null != V && !G && l === y.d4z.GROUP_DM && (0, r.jsxs)("div", {
          className: U.controlButtonWrapper,
          children: [(0, r.jsx)(f.ZP.Divider, {}), (0, r.jsx)(p.Z, {
            onClick: () => s.Z.toggleParticipantsList(V, !G)
          })]
        })]
      })
    }(),
    transparent: P,
    onDoubleClick: k,
    "aria-label": M,
    "aria-labelledby": Z,
    role: j,
    scrollable: L,
    children: t
  })
}

function L(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": l,
    role: o
  } = e;
  return (0, r.jsx)(f.ZP, {
    className: n,
    onDoubleClick: k,
    "aria-label": i,
    "aria-labelledby": l,
    role: o,
    children: t
  })
}

function j(e) {
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
    [U.forumOrHome]: null != n.channelType && y.TPd.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === h.oC.GUILD_HOME
  });
  return (0, r.jsx)(u.Gt, {
    value: i,
    children: t ? (0, r.jsx)(Z, M(b({}, n), {
      className: o
    })) : (0, r.jsx)(L, M(b({}, n), {
      className: o
    }))
  })
}
j.Title = f.ZP.Title, j.Icon = f.ZP.Icon, j.Divider = f.ZP.Divider, j.Caret = f.ZP.Caret;
let v = j