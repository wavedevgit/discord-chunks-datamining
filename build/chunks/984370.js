/** Chunk was on 87294 **/
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
  O = r(979651),
  y = r(358085),
  g = r(998502),
  j = r(665149),
  m = r(981631),
  P = r(176505),
  h = r(220705);

function v(e) {
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

function Z(e) {
  let {
    children: t,
    className: r,
    channelId: o,
    channelType: c,
    guildId: y,
    innerClassname: g,
    transparent: v = !1,
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
  } = e, R = null == o || (0, P.AB)(o) ? null : o, T = (0, i.e7)([O.Z], () => O.Z.isInChannel(R) || !1), _ = (0, i.e7)([s.Z], () => null != R && s.Z.getParticipantsListOpen(R)), {
    enabled: A,
    inInbox: B
  } = b.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: G
  } = (0, u.Z)({
    location: "HeaderBar"
  });
  return (0, n.jsx)(j.ZP, {
    className: r,
    innerClassName: g,
    toolbar: function() {
      if (null == Z) return null;
      let e = null != o && !N;
      return l.tq ? E : (0, n.jsxs)(n.Fragment, {
        children: [Z, e ? (0, n.jsx)(p.Z, {
          className: h.search
        }, null != y ? y : o) : null, k && (0, n.jsx)(j.ZP.Divider, {}), A && !B ? (0, n.jsx)(f.Z, {}) : null, G && T && null != R && !_ && c === m.d4z.GROUP_DM && (0, n.jsxs)("div", {
          className: h.controlButtonWrapper,
          children: [(0, n.jsx)(j.ZP.Divider, {}), (0, n.jsx)(d.Z, {
            onClick: () => a.Z.toggleParticipantsList(R, !_)
          })]
        })]
      })
    }(),
    transparent: v,
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
  return (0, n.jsx)(j.ZP, {
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
    children: t ? (0, n.jsx)(Z, w(v({}, r), {
      className: r.className
    })) : (0, n.jsx)(E, w(v({}, r), {
      className: r.className
    }))
  })
}
x.Title = j.ZP.Title, x.Icon = j.ZP.Icon, x.ChannelIcon = j.ZP.ChannelIcon, x.Divider = j.ZP.Divider, x.Caret = j.ZP.Caret;
let D = x