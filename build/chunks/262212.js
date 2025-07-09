/** Chunk was on 52370 **/
r.d(t, {
  Nn: () => v,
  ZP: () => k,
  ms: () => x
});
var n = r(255367),
  o = r(73800),
  a = r(120356),
  i = r.n(a),
  l = r(755721),
  s = r(481060),
  c = r(762762),
  u = r(690786),
  d = r(639777),
  p = r(827397),
  f = r(279604),
  b = r(535396),
  g = r(93841),
  _ = r(388032),
  m = r(503945);

function j() {
  return (j = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  }).apply(this, arguments)
}

function y(e) {
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

function O(e, t) {
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

function h(e, t) {
  if (null == e) return {};
  var r, n, o = function(e, t) {
    if (null == e) return {};
    var r, n, o = {},
      a = Object.keys(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
  }
  return o
}

function C(e) {
  let {
    powerup: t,
    isActive: r,
    compact: o
  } = e, a = r ? (0, n.jsx)(s.mTd, {
    size: "sm",
    color: "currentColor"
  }) : (0, n.jsx)(s.$Eu, {
    size: "sm",
    color: "currentColor"
  }), i = _.intl.string(r ? g.default.TZsu1d : g.default.gSxlHR);
  return (0, n.jsxs)(n.Fragment, {
    children: [!o && i, !o && (0, n.jsx)("span", {
      className: m.dot,
      children: "•"
    }), a, (0, n.jsx)("span", {
      children: t.cost
    })]
  })
}

function x(e) {
  var {
    guildId: t,
    powerup: r,
    onClick: o
  } = e, a = h(e, ["guildId", "powerup", "onClick"]);
  let i = (0, p.Z)(t, r),
    {
      onShowMore: s
    } = (0, f.ZP)(t, r),
    c = b.uc.has(r.skuId);
  return (0, n.jsx)(l.zx, O(y({
    className: m.primaryButton,
    innerClassName: m.buttonInner,
    wrapperClassName: m.buttonWrapper,
    grow: !0,
    onClick: e => {
      null == o || o(e), c ? null == i || i(e) : null == s || s()
    }
  }, a), {
    children: c ? _.intl.string(g.default["g5Ds6+"]) : _.intl.string(_.t["0Q61kJ"])
  }))
}

function v(e) {
  var {
    guildId: t,
    powerup: r,
    compact: a,
    onError: d
  } = e, p = h(e, ["guildId", "powerup", "compact", "onError"]);
  let {
    onActivate: b,
    isLoading: j,
    error: x,
    onShowDeactivate: v
  } = (0, f.ZP)(t, r), P = null != (0, u.Z)(t, r), {
    disabled: w,
    reason: k
  } = (0, c.Z)(t, r, P);
  return o.useEffect(() => {
    null == d || d(x)
  }, [x, d]), (0, n.jsx)(s.ua7, {
    delay: 100,
    "aria-label": null != k ? k : P ? _.intl.string(g.default.TZsu1d) : void 0,
    text: null != k ? k : P ? (0, n.jsxs)("div", {
      className: m.tooltipContainer,
      children: [(0, n.jsx)(s.Text, {
        variant: "text-xs/semibold",
        children: _.intl.string(g.default.TZsu1d)
      }), (0, n.jsx)(s.Text, {
        variant: "text-xs/medium",
        children: _.intl.formatToPlainString(g.default["5HQUzM"], {
          boostCount: r.cost
        })
      })]
    }) : void 0,
    children: e => (0, n.jsx)(l.zx, O(y(O(y({}, e), {
      className: m.secondaryButton,
      innerClassName: m.buttonInner,
      wrapperClassName: i()(m.secondaryButton, {
        [m.buttonWrapper]: !0 === p.grow
      }),
      color: P ? l.Tt.PRIMARY : l.Tt.BRAND,
      "aria-label": _.intl.string(P ? g.default.TZsu1d : g.default.gSxlHR),
      disabled: w,
      onClick: P ? v : b,
      submitting: j
    }), p), {
      children: (0, n.jsx)(C, {
        powerup: r,
        isActive: P,
        compact: a
      })
    }))
  })
}

function P(e) {
  let {
    className: t,
    guildId: r,
    powerup: o
  } = e, {
    onShowMore: a
  } = (0, f.ZP)(r, o);
  return (0, n.jsx)("div", {
    className: i()(m.container, t),
    children: (0, n.jsx)(l.zx, {
      className: m.primaryButton,
      innerClassName: m.buttonInner,
      wrapperClassName: m.buttonWrapper,
      grow: !0,
      onClick: a,
      children: o.type === b.Us.LEVEL ? _.intl.string(_.t["0Q61kJ"]) : _.intl.string(_.t.Xa11Eh)
    })
  })
}

function w(e) {
  let {
    className: t,
    guildId: r,
    powerup: o,
    onError: a
  } = e, l = null != (0, u.Z)(r, o), s = !l;
  return (0, n.jsxs)("div", {
    className: i()(m.container, t),
    children: [(0, n.jsx)(v, {
      guildId: r,
      powerup: o,
      onError: a,
      grow: s,
      compact: !s
    }), l && (0, n.jsx)(x, {
      guildId: r,
      powerup: o
    })]
  })
}

function k(e) {
  var t = j({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, d.Z)(t.guildId) ? (0, n.jsx)(w, y({}, t)) : (0, n.jsx)(P, y({}, t))
}