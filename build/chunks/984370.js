/** Chunk was on 51164 **/
r.d(t, {
  O: () => S,
  Z: () => I
}), r(35282);
var n = r(255367);
r(73800);
var l = r(873546),
  a = r(442837),
  i = r(475179),
  c = r(100527),
  o = r(906732),
  s = r(358221),
  u = r(185935),
  b = r(2818),
  f = r(954551),
  p = r(208450),
  d = r(975146),
  O = r(979651),
  y = r(358085),
  g = r(998502),
  m = r(665149),
  j = r(981631),
  v = r(176505),
  P = r(220705);

function h(e) {
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

function w(e, t) {
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
async function S(e) {
  if (!e && (0, y.isMac)() && y.isPlatformEmbedded) {
    var t, r, n;
    let e = null != (n = await (null == (t = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(r))) ? n : "Maximize";
    "Minimize" === e ? g.ZP.minimize() : "Maximize" === e && g.ZP.maximize()
  }
}

function E(e) {
  let {
    children: t,
    className: r,
    channelId: c,
    channelType: o,
    guildId: y,
    innerClassname: g,
    transparent: h = !1,
    showToolbar: w = !0,
    toolbar: E,
    mobileToolbar: Z,
    "aria-label": D,
    "aria-labelledby": I,
    scrollable: x,
    role: N,
    hideSearch: C,
    showDivider: M,
    disableDoubleClick: T
  } = e, k = null == c || (0, v.AB)(c) ? null : c, R = (0, a.e7)([O.Z], () => O.Z.isInChannel(k) || !1), A = (0, a.e7)([s.Z], () => null != k && s.Z.getParticipantsListOpen(k)), {
    enabled: _,
    inInbox: G
  } = b.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: L
  } = (0, u.Z)({
    location: "HeaderBar"
  });
  return (0, n.jsx)(m.ZP, {
    className: r,
    innerClassName: g,
    toolbar: function() {
      if (null == E) return null;
      let e = null != c && !C;
      return l.tq ? Z : (0, n.jsxs)(n.Fragment, {
        children: [E, e ? (0, n.jsx)(p.Z, {
          className: P.search
        }, null != y ? y : c) : null, M && (0, n.jsx)(m.ZP.Divider, {}), _ && !G ? (0, n.jsx)(f.Z, {}) : null, L && R && null != k && !A && o === j.d4z.GROUP_DM && (0, n.jsxs)("div", {
          className: P.controlButtonWrapper,
          children: [(0, n.jsx)(m.ZP.Divider, {}), (0, n.jsx)(d.Z, {
            onClick: () => i.Z.toggleParticipantsList(k, !A)
          })]
        })]
      })
    }(),
    transparent: h,
    showToolbar: w,
    onDoubleClick: () => S(T),
    "aria-label": D,
    "aria-labelledby": I,
    role: N,
    scrollable: x,
    children: t
  })
}

function Z(e) {
  let {
    children: t,
    className: r,
    "aria-label": l,
    "aria-labelledby": a,
    role: i,
    disableDoubleClick: c
  } = e;
  return (0, n.jsx)(m.ZP, {
    className: r,
    onDoubleClick: () => S(c),
    "aria-label": l,
    "aria-labelledby": a,
    role: i,
    children: t
  })
}

function D(e) {
  var {
    isAuthenticated: t = !0
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["isAuthenticated"]);
  let {
    analyticsLocations: l
  } = (0, o.ZP)(c.Z.HEADER_BAR);
  return (0, n.jsx)(o.Gt, {
    value: l,
    children: t ? (0, n.jsx)(E, w(h({}, r), {
      className: r.className
    })) : (0, n.jsx)(Z, w(h({}, r), {
      className: r.className
    }))
  })
}
D.Title = m.ZP.Title, D.Icon = m.ZP.Icon, D.Divider = m.ZP.Divider, D.Caret = m.ZP.Caret;
let I = D