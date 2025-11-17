/** Chunk was on 384 **/
/** chunk id: 489776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk636606 = require("./636606.js"),
  Chunk722770 = require("./722770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk236413 = require("./236413.js"),
  Chunk85960 = require("./85960.js"),
  Chunk65912 = require("./65912.js"),
  Chunk564488 = require("./564488.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk32490 = require("./32490.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function f(e, t) {
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

function h(e) {
  let {
    guildId: t,
    triggerType: n
  } = e, h = i.useMemo(() => () => (0, o.ep)(t, n), [t, n]), [b] = i.useState(h), [x, j] = i.useState(false), {
    editingRule: _,
    createNewEditingRule: v
  } = (0, d.V)(), {
    getDefaultRuleName: O
  } = c.I6[n], C = !(0, o.Vb)(_) && (null == _ ? true : _.triggerType) === n, [y, N] = i.useState(C ? _ : b), E = (0, s.q_F)({
    opacity: +!C,
    pointerEvents: C ? "none" : "all",
    config: f(p({}, l.config.stiff), {
      clamp: true
    })
  }), I = (0, s.q_F)({
    opacity: +!!C,
    pointerEvents: C ? "all" : "none",
    config: f(p({}, l.config.stiff), {
      clamp: true
    }),
    onStart: () => {
      N(C ? _ : b)
    },
    onRest: () => {
      N(C ? _ : b), j(C)
    }
  });
  return null == _ || C ? (0, r.jsxs)("div", {
    className: m.mainRuleContainer,
    style: {
      height: C ? "auto" : "60px"
    },
    children: [(0, r.jsx)(l.animated.div, {
      className: m.animatedRuleCardContainer,
      style: I,
      children: (0, r.jsx)(u.Z, {
        rule: y,
        persistEdit: x
      })
    }), (0, r.jsx)(l.animated.div, {
      className: m.animatedNewRuleContainer,
      style: E,
      children: (0, r.jsxs)(s.P3F, {
        className: m.addAnotherRuleCardContainer,
        onClick: () => {
          v(t, n)
        },
        children: [(0, r.jsx)(s.oFk, {
          size: "custom",
          width: 20,
          height: 20,
          color: a.Z.BLUE_345,
          className: m.plusIcon
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: g.intl.format(g.t.dNjRAf, {
            ruleName: O()
          })
        })]
      })
    })]
  }) : null
}