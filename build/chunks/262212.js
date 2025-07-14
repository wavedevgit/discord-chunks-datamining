/** Chunk was on 99014 **/
n.d(t, {
  Nn: () => P,
  ZP: () => w,
  ms: () => h
});
var r = n(255367),
  o = n(73800),
  i = n(120356),
  l = n.n(i),
  a = n(755721),
  s = n(481060),
  c = n(762762),
  u = n(975951),
  d = n(639777),
  p = n(322043),
  f = n(717259),
  b = n(827397),
  m = n(279604),
  v = n(535396),
  O = n(93841),
  j = n(388032),
  g = n(503945);

function x() {
  return (x = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function I(e) {
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

function _(e, t) {
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

function y(e, t) {
  if (null == e) return {};
  var n, r, o = function(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
  }
  return o
}

function k(e) {
  let {
    powerup: t,
    isActive: n,
    compact: o
  } = e, i = n ? (0, r.jsx)(s.mTd, {
    size: "sm",
    color: "currentColor"
  }) : (0, r.jsx)(s.$Eu, {
    size: "sm",
    color: "currentColor"
  }), l = j.intl.string(n ? O.default.TZsu1d : O.default.gSxlHR);
  return (0, r.jsxs)(r.Fragment, {
    children: [!o && l, !o && (0, r.jsx)("span", {
      className: g.dot,
      children: "•"
    }), i, (0, r.jsx)("span", {
      children: t.cost
    })]
  })
}

function E(e) {
  let {
    guildId: t,
    powerup: n
  } = e, {
    activatedEntitlement: o,
    activatedLevelPowerup: i
  } = (0, u.Z)(t, n);
  if ((0, f.Z)(t, n)) {
    var l;
    return (0, r.jsxs)("div", {
      className: g.tooltipContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        children: j.intl.string(O.default["9oYuvb"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        children: j.intl.formatToPlainString(O.default.WRRYUV, {
          perkName: null != (l = null == i ? void 0 : i.title) ? l : j.intl.string(j.t.BfF6EB)
        })
      })]
    })
  }
  if (null != o) return (0, r.jsxs)("div", {
    className: g.tooltipContainer,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      children: j.intl.string(O.default.TZsu1d)
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      children: j.intl.formatToPlainString(O.default["5HQUzM"], {
        boostCount: n.cost
      })
    })]
  })
}

function h(e) {
  var {
    guildId: t,
    powerup: n,
    onClick: o
  } = e, i = y(e, ["guildId", "powerup", "onClick"]);
  let l = (0, b.Z)(t, n),
    {
      onShowMore: s
    } = (0, m.ZP)(t, n),
    c = v.uc.has(n.skuId);
  return (0, r.jsx)(a.zx, _(I({
    className: g.primaryButton,
    innerClassName: g.buttonInner,
    wrapperClassName: g.buttonWrapper,
    grow: !0,
    onClick: e => {
      null == o || o(e), c ? null == l || l(e) : null == s || s()
    }
  }, i), {
    children: c ? j.intl.string(O.default["g5Ds6+"]) : j.intl.string(j.t["0Q61kJ"])
  }))
}

function P(e) {
  var {
    guildId: t,
    powerup: n,
    compact: i,
    onError: u
  } = e, d = y(e, ["guildId", "powerup", "compact", "onError"]);
  let {
    onActivate: f,
    isLoading: b,
    error: v,
    onShowDeactivate: x
  } = (0, m.ZP)(t, n), h = (0, p.Z)(t, n), {
    disabled: P,
    reason: C
  } = (0, c.Z)(t, n, h);
  return o.useEffect(() => {
    null == u || u(v)
  }, [v, u]), (0, r.jsx)(s.ua7, {
    delay: 100,
    "aria-label": null != C ? C : h ? j.intl.string(O.default.TZsu1d) : void 0,
    text: null != C ? C : h ? (0, r.jsx)(E, {
      guildId: t,
      powerup: n
    }) : void 0,
    children: e => (0, r.jsx)(a.zx, _(I(_(I({}, e), {
      className: g.secondaryButton,
      innerClassName: g.buttonInner,
      wrapperClassName: l()(g.secondaryButton, {
        [g.buttonWrapper]: !0 === d.grow
      }),
      color: h ? a.Tt.PRIMARY : a.Tt.BRAND,
      "aria-label": j.intl.string(h ? O.default.TZsu1d : O.default.gSxlHR),
      disabled: P,
      onClick: h ? x : f,
      submitting: b
    }), d), {
      children: (0, r.jsx)(k, {
        powerup: n,
        isActive: h,
        compact: i
      })
    }))
  })
}

function C(e) {
  let {
    className: t,
    guildId: n,
    powerup: o
  } = e, {
    onShowMore: i
  } = (0, m.ZP)(n, o);
  return (0, r.jsx)("div", {
    className: l()(g.container, t),
    children: (0, r.jsx)(a.zx, {
      className: g.primaryButton,
      innerClassName: g.buttonInner,
      wrapperClassName: g.buttonWrapper,
      grow: !0,
      onClick: i,
      children: o.type === v.Us.LEVEL ? j.intl.string(j.t["0Q61kJ"]) : j.intl.string(j.t.Xa11Eh)
    })
  })
}

function N(e) {
  let {
    className: t,
    guildId: n,
    powerup: o,
    onError: i
  } = e, a = (0, p.Z)(n, o), s = !a;
  return (0, r.jsxs)("div", {
    className: l()(g.container, t),
    children: [(0, r.jsx)(P, {
      guildId: n,
      powerup: o,
      onError: i,
      grow: s,
      compact: !s
    }), a && (0, r.jsx)(h, {
      guildId: n,
      powerup: o
    })]
  })
}

function w(e) {
  var t = x({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, d.Z)(t.guildId) ? (0, r.jsx)(N, I({}, t)) : (0, r.jsx)(C, I({}, t))
}