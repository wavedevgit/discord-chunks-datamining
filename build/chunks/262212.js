/** Chunk was on 99014 **/
n.d(t, {
  Nn: () => k,
  ZP: () => C,
  ms: () => y
});
var r = n(255367),
  o = n(73800),
  a = n(120356),
  i = n.n(a),
  s = n(755721),
  l = n(481060),
  c = n(762762),
  u = n(690786),
  d = n(639777),
  p = n(827397),
  f = n(279604),
  b = n(535396),
  m = n(93841),
  O = n(388032),
  j = n(503945);

function g() {
  return (g = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function v(e) {
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

function I(e, t) {
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

function _(e, t) {
  if (null == e) return {};
  var n, r, o = function(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
  }
  return o
}

function x(e) {
  let {
    powerup: t,
    isActive: n,
    compact: o
  } = e, a = n ? (0, r.jsx)(l.mTd, {
    size: "sm",
    color: "currentColor"
  }) : (0, r.jsx)(l.$Eu, {
    size: "sm",
    color: "currentColor"
  }), i = O.intl.string(n ? m.default.TZsu1d : m.default.gSxlHR);
  return (0, r.jsxs)(r.Fragment, {
    children: [!o && i, !o && (0, r.jsx)("span", {
      className: j.dot,
      children: "•"
    }), a, (0, r.jsx)("span", {
      children: t.cost
    })]
  })
}

function y(e) {
  var {
    guildId: t,
    powerup: n,
    onClick: o
  } = e, a = _(e, ["guildId", "powerup", "onClick"]);
  let i = (0, p.Z)(t, n),
    {
      onShowMore: l
    } = (0, f.ZP)(t, n),
    c = b.uc.has(n.skuId);
  return (0, r.jsx)(s.zx, I(v({
    className: j.primaryButton,
    innerClassName: j.buttonInner,
    wrapperClassName: j.buttonWrapper,
    grow: !0,
    onClick: e => {
      null == o || o(e), c ? null == i || i(e) : null == l || l()
    }
  }, a), {
    children: c ? O.intl.string(m.default["g5Ds6+"]) : O.intl.string(O.t["0Q61kJ"])
  }))
}

function k(e) {
  var {
    guildId: t,
    powerup: n,
    compact: a,
    onError: d
  } = e, p = _(e, ["guildId", "powerup", "compact", "onError"]);
  let {
    onActivate: b,
    isLoading: g,
    error: y,
    onShowDeactivate: k
  } = (0, f.ZP)(t, n), h = null != (0, u.Z)(t, n), {
    disabled: E,
    reason: C
  } = (0, c.Z)(t, n, h);
  return o.useEffect(() => {
    null == d || d(y)
  }, [y, d]), (0, r.jsx)(l.ua7, {
    delay: 100,
    "aria-label": null != C ? C : h ? O.intl.string(m.default.TZsu1d) : void 0,
    text: null != C ? C : h ? (0, r.jsxs)("div", {
      className: j.tooltipContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        children: O.intl.string(m.default.TZsu1d)
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: O.intl.formatToPlainString(m.default["5HQUzM"], {
          boostCount: n.cost
        })
      })]
    }) : void 0,
    children: e => (0, r.jsx)(s.zx, I(v(I(v({}, e), {
      className: j.secondaryButton,
      innerClassName: j.buttonInner,
      wrapperClassName: i()(j.secondaryButton, {
        [j.buttonWrapper]: !0 === p.grow
      }),
      color: h ? s.Tt.PRIMARY : s.Tt.BRAND,
      "aria-label": O.intl.string(h ? m.default.TZsu1d : m.default.gSxlHR),
      disabled: E,
      onClick: h ? k : b,
      submitting: g
    }), p), {
      children: (0, r.jsx)(x, {
        powerup: n,
        isActive: h,
        compact: a
      })
    }))
  })
}

function h(e) {
  let {
    className: t,
    guildId: n,
    powerup: o
  } = e, {
    onShowMore: a
  } = (0, f.ZP)(n, o);
  return (0, r.jsx)("div", {
    className: i()(j.container, t),
    children: (0, r.jsx)(s.zx, {
      className: j.primaryButton,
      innerClassName: j.buttonInner,
      wrapperClassName: j.buttonWrapper,
      grow: !0,
      onClick: a,
      children: o.type === b.Us.LEVEL ? O.intl.string(O.t["0Q61kJ"]) : O.intl.string(O.t.Xa11Eh)
    })
  })
}

function E(e) {
  let {
    className: t,
    guildId: n,
    powerup: o,
    onError: a
  } = e, s = null != (0, u.Z)(n, o), l = !s;
  return (0, r.jsxs)("div", {
    className: i()(j.container, t),
    children: [(0, r.jsx)(k, {
      guildId: n,
      powerup: o,
      onError: a,
      grow: l,
      compact: !l
    }), s && (0, r.jsx)(y, {
      guildId: n,
      powerup: o
    })]
  })
}

function C(e) {
  var t = g({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, d.Z)(t.guildId) ? (0, r.jsx)(E, v({}, t)) : (0, r.jsx)(h, v({}, t))
}