/** Chunk was on 12769 **/
r.d(t, {
  O: () => P,
  Z: () => C
}), r(35282);
var n = r(255367);
r(73800);
var i = r(873546),
  a = r(442837),
  s = r(475179),
  l = r(100527),
  c = r(906732),
  o = r(358221),
  u = r(185935),
  d = r(2818),
  _ = r(954551),
  h = r(208450),
  f = r(975146),
  p = r(979651),
  b = r(358085),
  y = r(998502),
  g = r(665149),
  O = r(981631),
  E = r(176505),
  S = r(220705);

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

function j(e, t) {
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
async function P(e) {
  if (!e && (0, b.isMac)() && b.isPlatformEmbedded) {
    var t, r, n;
    let e = null != (n = await (null == (t = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(r))) ? n : "Maximize";
    "Minimize" === e ? y.ZP.minimize() : "Maximize" === e && y.ZP.maximize()
  }
}

function x(e) {
  let {
    children: t,
    className: r,
    channelId: l,
    channelType: c,
    guildId: b,
    innerClassname: y,
    transparent: m = !1,
    showToolbar: j = !0,
    toolbar: x,
    mobileToolbar: v,
    "aria-label": R,
    "aria-labelledby": C,
    scrollable: N,
    role: I,
    hideSearch: M,
    showDivider: A,
    disableDoubleClick: Z
  } = e, T = null == l || (0, E.AB)(l) ? null : l, D = (0, a.e7)([p.Z], () => p.Z.isInChannel(T) || !1), w = (0, a.e7)([o.Z], () => null != T && o.Z.getParticipantsListOpen(T)), {
    enabled: k,
    inInbox: L
  } = d.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: H
  } = (0, u.Z)({
    location: "HeaderBar"
  });
  return (0, n.jsx)(g.ZP, {
    className: r,
    innerClassName: y,
    toolbar: function() {
      if (null == x) return null;
      let e = null != l && !M;
      return i.tq ? v : (0, n.jsxs)(n.Fragment, {
        children: [x, e && !(0, E.AB)(l) ? (0, n.jsx)(h.Z, {
          guildId: b,
          channelId: l,
          className: S.search
        }, null != b ? b : l) : null, A && (0, n.jsx)(g.ZP.Divider, {}), k && !L ? (0, n.jsx)(_.Z, {}) : null, H && D && null != T && !w && c === O.d4z.GROUP_DM && (0, n.jsxs)("div", {
          className: S.controlButtonWrapper,
          children: [(0, n.jsx)(g.ZP.Divider, {}), (0, n.jsx)(f.Z, {
            onClick: () => s.Z.toggleParticipantsList(T, !w)
          })]
        })]
      })
    }(),
    transparent: m,
    showToolbar: j,
    onDoubleClick: () => P(Z),
    "aria-label": R,
    "aria-labelledby": C,
    role: I,
    scrollable: N,
    children: t
  })
}

function v(e) {
  let {
    children: t,
    className: r,
    "aria-label": i,
    "aria-labelledby": a,
    role: s,
    disableDoubleClick: l
  } = e;
  return (0, n.jsx)(g.ZP, {
    className: r,
    onDoubleClick: () => P(l),
    "aria-label": i,
    "aria-labelledby": a,
    role: s,
    children: t
  })
}

function R(e) {
  var {
    isAuthenticated: t = !0
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["isAuthenticated"]);
  let {
    analyticsLocations: i
  } = (0, c.ZP)(l.Z.HEADER_BAR);
  return (0, n.jsx)(c.Gt, {
    value: i,
    children: t ? (0, n.jsx)(x, j(m({}, r), {
      className: r.className
    })) : (0, n.jsx)(v, j(m({}, r), {
      className: r.className
    }))
  })
}
R.Title = g.ZP.Title, R.Icon = g.ZP.Icon, R.ChannelIcon = g.ZP.ChannelIcon, R.Divider = g.ZP.Divider, R.Caret = g.ZP.Caret;
let C = R