/** Chunk was on 24358 **/
r.d(t, {
  O: () => x,
  Z: () => I
}), r(35282);
var n = r(255367);
r(73800);
var l = r(873546),
  i = r(442837),
  a = r(475179),
  o = r(100527),
  c = r(906732),
  s = r(358221),
  u = r(185935),
  b = r(2818),
  p = r(954551),
  f = r(208450),
  O = r(975146),
  y = r(979651),
  d = r(358085),
  j = r(998502),
  g = r(665149),
  m = r(981631),
  P = r(176505),
  v = r(220705);

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
async function x(e) {
  if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
    var t, r, n;
    let e = null != (n = await (null == (t = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(r))) ? n : "Maximize";
    "Minimize" === e ? j.ZP.minimize() : "Maximize" === e && j.ZP.maximize()
  }
}

function E(e) {
  let {
    children: t,
    className: r,
    channelId: o,
    channelType: c,
    guildId: d,
    innerClassname: j,
    transparent: h = !1,
    showToolbar: w = !0,
    toolbar: E,
    mobileToolbar: D,
    "aria-label": S,
    "aria-labelledby": I,
    scrollable: N,
    role: Z,
    hideSearch: C,
    showDivider: k,
    disableDoubleClick: T
  } = e, M = null == o || (0, P.AB)(o) ? null : o, A = (0, i.e7)([y.Z], () => y.Z.isInChannel(M) || !1), R = (0, i.e7)([s.Z], () => null != M && s.Z.getParticipantsListOpen(M)), {
    enabled: _,
    inInbox: G
  } = b.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: B
  } = (0, u.Z)({
    location: "HeaderBar"
  });
  return (0, n.jsx)(g.ZP, {
    className: r,
    innerClassName: j,
    toolbar: function() {
      if (null == E) return null;
      let e = null != o && !C;
      return l.tq ? D : (0, n.jsxs)(n.Fragment, {
        children: [E, e ? (0, n.jsx)(f.Z, {
          className: v.search
        }, null != d ? d : o) : null, k && (0, n.jsx)(g.ZP.Divider, {}), _ && !G ? (0, n.jsx)(p.Z, {}) : null, B && A && null != M && !R && c === m.d4z.GROUP_DM && (0, n.jsxs)("div", {
          className: v.controlButtonWrapper,
          children: [(0, n.jsx)(g.ZP.Divider, {}), (0, n.jsx)(O.Z, {
            onClick: () => a.Z.toggleParticipantsList(M, !R)
          })]
        })]
      })
    }(),
    transparent: h,
    showToolbar: w,
    onDoubleClick: () => x(T),
    "aria-label": S,
    "aria-labelledby": I,
    role: Z,
    scrollable: N,
    children: t
  })
}

function D(e) {
  let {
    children: t,
    className: r,
    "aria-label": l,
    "aria-labelledby": i,
    role: a,
    disableDoubleClick: o
  } = e;
  return (0, n.jsx)(g.ZP, {
    className: r,
    onDoubleClick: () => x(o),
    "aria-label": l,
    "aria-labelledby": i,
    role: a,
    children: t
  })
}

function S(e) {
  var {
    isAuthenticated: t = !0
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["isAuthenticated"]);
  let {
    analyticsLocations: l
  } = (0, c.ZP)(o.Z.HEADER_BAR);
  return (0, n.jsx)(c.Gt, {
    value: l,
    children: t ? (0, n.jsx)(E, w(h({}, r), {
      className: r.className
    })) : (0, n.jsx)(D, w(h({}, r), {
      className: r.className
    }))
  })
}
S.Title = g.ZP.Title, S.Icon = g.ZP.Icon, S.Divider = g.ZP.Divider, S.Caret = g.ZP.Caret;
let I = S