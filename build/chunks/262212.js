/** Chunk was on 59256 **/
n.d(t, {
  ZP: () => y,
  ms: () => j
});
var r = n(255367);
n(73800);
var o = n(120356),
  l = n.n(o),
  a = n(755721),
  s = n(10765),
  i = n(639777),
  c = n(973772),
  u = n(880419),
  d = n(827397),
  p = n(279604),
  f = n(535396),
  m = n(93841),
  b = n(388032),
  g = n(503945);

function h() {
  return (h = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function _(e) {
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

function j(e) {
  var t, n, {
      guildId: o,
      powerup: l,
      onClick: s
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup", "onClick"]);
  let c = (0, d.Z)(o, l),
    {
      onShowMore: u
    } = (0, p.ZP)(o, l),
    h = f.uc.has(l.skuId);
  return (0, r.jsx)(a.zx, (t = _({
    className: g.primaryButton,
    innerClassName: g.buttonInner,
    wrapperClassName: g.buttonWrapper,
    grow: !0,
    onClick: e => {
      null == s || s(e), h ? null == c || c(e) : null == u || u()
    }
  }, i), n = n = {
    children: h ? b.intl.string(m.default["g5Ds6+"]) : b.intl.string(b.t["0Q61kJ"])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function x(e) {
  let {
    className: t,
    guildId: n,
    powerup: o
  } = e, {
    onShowMore: s
  } = (0, p.ZP)(n, o);
  return (0, r.jsx)("div", {
    className: l()(g.container, t),
    children: (0, r.jsx)(a.zx, {
      className: g.primaryButton,
      innerClassName: g.buttonInner,
      wrapperClassName: g.buttonWrapper,
      grow: !0,
      onClick: s,
      children: o.type === f.Us.LEVEL ? b.intl.string(b.t["0Q61kJ"]) : b.intl.string(b.t.Xa11Eh)
    })
  })
}

function v(e) {
  let {
    className: t,
    guildId: n,
    powerup: o,
    onError: a
  } = e, i = (0, c.ZP)(n, o).type !== f.A3.INACTIVE, d = (0, s.Z)(n, o, "GuildPowerupCardFooterAdmin"), p = i || !d, m = !i;
  return (0, r.jsxs)("div", {
    className: l()(g.container, t),
    children: [p && (0, r.jsx)(u.Z, {
      guildId: n,
      powerup: o,
      onError: a,
      grow: m,
      compact: !m
    }), i && (0, r.jsx)(j, {
      guildId: n,
      powerup: o
    })]
  })
}

function y(e) {
  var t = h({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, i.Z)(t.guildId) ? (0, r.jsx)(v, _({}, t)) : (0, r.jsx)(x, _({}, t))
}