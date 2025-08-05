/** Chunk was on 93239 **/
r.d(t, {
  O: () => j,
  Z: () => C
}), r(35282);
var n = r(255367);
r(73800);
var i = r(873546),
  s = r(442837),
  a = r(475179),
  c = r(100527),
  l = r(906732),
  o = r(358221),
  u = r(185935),
  d = r(2818),
  _ = r(954551),
  p = r(208450),
  h = r(975146),
  y = r(979651),
  f = r(358085),
  S = r(998502),
  b = r(665149),
  E = r(981631),
  g = r(176505),
  O = r(220705);

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
async function j(e) {
  if (!e && (0, f.isMac)() && f.isPlatformEmbedded) {
    var t, r, n;
    let e = null != (n = await (null == (t = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(r))) ? n : "Maximize";
    "Minimize" === e ? S.ZP.minimize() : "Maximize" === e && S.ZP.maximize()
  }
}

function R(e) {
  let {
    children: t,
    className: r,
    channelId: c,
    channelType: l,
    guildId: f,
    innerClassname: S,
    transparent: m = !1,
    showToolbar: P = !0,
    toolbar: R,
    mobileToolbar: x,
    "aria-label": v,
    "aria-labelledby": C,
    scrollable: I,
    role: Z,
    hideSearch: A,
    showDivider: N,
    disableDoubleClick: T
  } = e, M = null == c || (0, g.AB)(c) ? null : c, w = (0, s.e7)([y.Z], () => y.Z.isInChannel(M) || !1), D = (0, s.e7)([o.Z], () => null != M && o.Z.getParticipantsListOpen(M)), {
    enabled: H,
    inInbox: k
  } = d.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: L
  } = (0, u.Z)({
    location: "HeaderBar"
  });
  return (0, n.jsx)(b.ZP, {
    className: r,
    innerClassName: S,
    toolbar: function() {
      if (null == R) return null;
      let e = null != c && !A;
      return i.tq ? x : (0, n.jsxs)(n.Fragment, {
        children: [R, e && !(0, g.AB)(c) ? (0, n.jsx)(p.Z, {
          guildId: f,
          channelId: c,
          className: O.search
        }, null != f ? f : c) : null, N && (0, n.jsx)(b.ZP.Divider, {}), H && !k ? (0, n.jsx)(_.Z, {}) : null, L && w && null != M && !D && l === E.d4z.GROUP_DM && (0, n.jsxs)("div", {
          className: O.controlButtonWrapper,
          children: [(0, n.jsx)(b.ZP.Divider, {}), (0, n.jsx)(h.Z, {
            onClick: () => a.Z.toggleParticipantsList(M, !D)
          })]
        })]
      })
    }(),
    transparent: m,
    showToolbar: P,
    onDoubleClick: () => j(T),
    "aria-label": v,
    "aria-labelledby": C,
    role: Z,
    scrollable: I,
    children: t
  })
}

function x(e) {
  let {
    children: t,
    className: r,
    "aria-label": i,
    "aria-labelledby": s,
    role: a,
    disableDoubleClick: c
  } = e;
  return (0, n.jsx)(b.ZP, {
    className: r,
    onDoubleClick: () => j(c),
    "aria-label": i,
    "aria-labelledby": s,
    role: a,
    children: t
  })
}

function v(e) {
  var {
    isAuthenticated: t = !0
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        s = Object.keys(e);
      for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["isAuthenticated"]);
  let {
    analyticsLocations: i
  } = (0, l.ZP)(c.Z.HEADER_BAR);
  return (0, n.jsx)(l.Gt, {
    value: i,
    children: t ? (0, n.jsx)(R, P(m({}, r), {
      className: r.className
    })) : (0, n.jsx)(x, P(m({}, r), {
      className: r.className
    }))
  })
}
v.Title = b.ZP.Title, v.Icon = b.ZP.Icon, v.ChannelIcon = b.ZP.ChannelIcon, v.Divider = b.ZP.Divider, v.Caret = b.ZP.Caret;
let C = v