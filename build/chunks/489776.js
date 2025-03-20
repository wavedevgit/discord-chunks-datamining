/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(642128),
  a = n(722770),
  l = n(481060),
  o = n(236413),
  A = n(85960),
  c = n(65912),
  d = n(564488),
  u = n(388032),
  g = n(591024);

function f(e) {
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

function m(e, t) {
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

function p(e) {
  let {
    guildId: t,
    triggerType: n
  } = e, p = i.useMemo(() => () => (0, o.ep)(t, n), [t, n]), [h] = i.useState(p), [C, b] = i.useState(!1), {
    editingRule: v,
    createNewEditingRule: x
  } = (0, c.V)(), {
    getDefaultRuleName: N
  } = A.I6[n], j = !(0, o.Vb)(v) && (null == v ? void 0 : v.triggerType) === n, [E, I] = i.useState(j ? v : h), O = (0, l.q_F)({
    opacity: +!j,
    pointerEvents: j ? "none" : "all",
    config: m(f({}, s.config.stiff), {
      clamp: !0
    })
  }), y = (0, l.q_F)({
    opacity: +!!j,
    pointerEvents: j ? "all" : "none",
    config: m(f({}, s.config.stiff), {
      clamp: !0
    }),
    onStart: () => {
      I(j ? v : h)
    },
    onRest: () => {
      I(j ? v : h), b(j)
    }
  });
  return null == v || j ? (0, r.jsxs)("div", {
    className: g.mainRuleContainer,
    style: {
      height: j ? "auto" : "60px"
    },
    children: [(0, r.jsx)(s.animated.div, {
      className: g.animatedRuleCardContainer,
      style: y,
      children: (0, r.jsx)(d.Z, {
        rule: E,
        persistEdit: C
      })
    }), (0, r.jsx)(s.animated.div, {
      className: g.animatedNewRuleContainer,
      style: O,
      children: (0, r.jsxs)(l.P3F, {
        className: g.addAnotherRuleCardContainer,
        onClick: () => {
          x(t, n)
        },
        children: [(0, r.jsx)(l.oFk, {
          size: "custom",
          width: 20,
          height: 20,
          color: a.Z.BLUE_345,
          className: g.plusIcon
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: u.NW.format(u.t.dNjRAQ, {
            ruleName: N()
          })
        })]
      })
    })]
  }) : null
}