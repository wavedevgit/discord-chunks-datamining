/** Chunk was on 59256 **/
n.d(t, {
  ZP: () => y,
  ms: () => x
});
var r = n(255367);
n(73800);
var o = n(120356),
  l = n.n(o),
  s = n(755721),
  a = n(10765),
  i = n(639777),
  c = n(973772),
  d = n(880419),
  u = n(827397),
  p = n(279604),
  m = n(535396),
  f = n(93841),
  g = n(388032),
  b = n(503945);

function _() {
  return (_ = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function h(e) {
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

function x(e) {
  var t, n, {
      guildId: o,
      powerup: l,
      onClick: a
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
  let c = (0, u.Z)(o, l),
    {
      onShowMore: d
    } = (0, p.ZP)(o, l),
    _ = m.uc.has(l.skuId);
  return (0, r.jsx)(s.zx, (t = h({
    className: b.primaryButton,
    innerClassName: b.buttonInner,
    wrapperClassName: b.buttonWrapper,
    grow: !0,
    onClick: e => {
      null == a || a(e), _ ? null == c || c(e) : null == d || d()
    }
  }, i), n = n = {
    children: _ ? g.intl.string(f.default["g5Ds6+"]) : g.intl.string(g.t["0Q61kJ"])
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

function j(e) {
  let {
    className: t,
    guildId: n,
    powerup: o
  } = e, {
    onShowMore: a
  } = (0, p.ZP)(n, o);
  return (0, r.jsx)("div", {
    className: l()(b.container, t),
    children: (0, r.jsx)(s.zx, {
      className: b.primaryButton,
      innerClassName: b.buttonInner,
      wrapperClassName: b.buttonWrapper,
      grow: !0,
      onClick: a,
      children: o.type === m.Us.LEVEL ? g.intl.string(g.t["0Q61kJ"]) : g.intl.string(g.t.Xa11Eh)
    })
  })
}

function v(e) {
  let {
    className: t,
    guildId: n,
    powerup: o,
    onError: s
  } = e, i = (0, c.Z)(n, o).type !== m.A3.INACTIVE, u = (0, a.Z)(n, o, "GuildPowerupCardFooterAdmin"), p = i || !u, f = !i;
  return (0, r.jsxs)("div", {
    className: l()(b.container, t),
    children: [p && (0, r.jsx)(d.Z, {
      guildId: n,
      powerup: o,
      onError: s,
      grow: f,
      compact: !f
    }), i && (0, r.jsx)(x, {
      guildId: n,
      powerup: o
    })]
  })
}

function y(e) {
  var t = _({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, i.Z)(t.guildId) ? (0, r.jsx)(v, h({}, t)) : (0, r.jsx)(j, h({}, t))
}