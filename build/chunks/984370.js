/** Chunk was on 51164 **/
r.d(t, {
  O: () => S,
  Z: () => D
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
  f = r(954551),
  p = r(208450),
  d = r(975146),
  y = r(979651),
  O = r(358085),
  g = r(998502),
  m = r(665149),
  j = r(981631),
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
async function S(e) {
  if (!e && (0, O.isMac)() && O.isPlatformEmbedded) {
    var t, r, n;
    let e = null != (n = await (null == (t = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : t.call(r))) ? n : "Maximize";
    "Minimize" === e ? g.ZP.minimize() : "Maximize" === e && g.ZP.maximize()
  }
}

function Z(e) {
  let {
    children: t,
    className: r,
    channelId: o,
    channelType: c,
    guildId: O,
    innerClassname: g,
    transparent: h = !1,
    showToolbar: w = !0,
    toolbar: Z,
    mobileToolbar: E,
    "aria-label": x,
    "aria-labelledby": D,
    scrollable: I,
    role: C,
    hideSearch: N,
    showDivider: k,
    disableDoubleClick: M
  } = e, T = null == o || (0, P.AB)(o) ? null : o, R = (0, i.e7)([y.Z], () => y.Z.isInChannel(T) || !1), _ = (0, i.e7)([s.Z], () => null != T && s.Z.getParticipantsListOpen(T)), {
    enabled: A,
    inInbox: G
  } = b.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: B
  } = (0, u.Z)({
    location: "HeaderBar"
  });
  return (0, n.jsx)(m.ZP, {
    className: r,
    innerClassName: g,
    toolbar: function() {
      if (null == Z) return null;
      let e = null != o && !N;
      return l.tq ? E : (0, n.jsxs)(n.Fragment, {
        children: [Z, e ? (0, n.jsx)(p.Z, {
          className: v.search
        }, null != O ? O : o) : null, k && (0, n.jsx)(m.ZP.Divider, {}), A && !G ? (0, n.jsx)(f.Z, {}) : null, B && R && null != T && !_ && c === j.d4z.GROUP_DM && (0, n.jsxs)("div", {
          className: v.controlButtonWrapper,
          children: [(0, n.jsx)(m.ZP.Divider, {}), (0, n.jsx)(d.Z, {
            onClick: () => a.Z.toggleParticipantsList(T, !_)
          })]
        })]
      })
    }(),
    transparent: h,
    showToolbar: w,
    onDoubleClick: () => S(M),
    "aria-label": x,
    "aria-labelledby": D,
    role: C,
    scrollable: I,
    children: t
  })
}

function E(e) {
  let {
    children: t,
    className: r,
    "aria-label": l,
    "aria-labelledby": i,
    role: a,
    disableDoubleClick: o
  } = e;
  return (0, n.jsx)(m.ZP, {
    className: r,
    onDoubleClick: () => S(o),
    "aria-label": l,
    "aria-labelledby": i,
    role: a,
    children: t
  })
}

function x(e) {
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
    children: t ? (0, n.jsx)(Z, w(h({}, r), {
      className: r.className
    })) : (0, n.jsx)(E, w(h({}, r), {
      className: r.className
    }))
  })
}
x.Title = m.ZP.Title, x.Icon = m.ZP.Icon, x.Divider = m.ZP.Divider, x.Caret = m.ZP.Caret;
let D = x