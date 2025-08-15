/** Chunk was on 6049 **/
/** chunk id: 489776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js"),
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

function h(e, t) {
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

function f(e) {
  let {
    guildId: t,
    triggerType: n
  } = e, f = i.useMemo(() => () => (0, o.ep)(t, n), [t, n]), [b] = i.useState(f), [x, j] = i.useState(false), {
    editingRule: v,
    createNewEditingRule: _
  } = (0, d.V)(), {
    getDefaultRuleName: O
  } = c.I6[n], y = !(0, o.Vb)(v) && (null == v ? true : v.triggerType) === n, [C, N] = i.useState(y ? v : b), I = (0, s.q_F)({
    opacity: +!y,
    pointerEvents: y ? "none" : "all",
    config: h(p({}, l.config.stiff), {
      clamp: true
    })
  }), E = (0, s.q_F)({
    opacity: +!!y,
    pointerEvents: y ? "all" : "none",
    config: h(p({}, l.config.stiff), {
      clamp: true
    }),
    onStart: () => {
      N(y ? v : b)
    },
    onRest: () => {
      N(y ? v : b), j(y)
    }
  });
  return null == v || y ? (0, r.jsxs)("div", {
    className: g.mainRuleContainer,
    style: {
      height: y ? "auto" : "60px"
    },
    children: [(0, r.jsx)(l.animated.div, {
      className: g.animatedRuleCardContainer,
      style: E,
      children: (0, r.jsx)(u.Z, {
        rule: C,
        persistEdit: x
      })
    }), (0, r.jsx)(l.animated.div, {
      className: g.animatedNewRuleContainer,
      style: I,
      children: (0, r.jsxs)(s.P3F, {
        className: g.addAnotherRuleCardContainer,
        onClick: () => {
          _(t, n)
        },
        children: [(0, r.jsx)(s.oFk, {
          size: "custom",
          width: 20,
          height: 20,
          color: a.Z.BLUE_345,
          className: g.plusIcon
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: m.intl.format(m.t.dNjRAQ, {
            ruleName: O()
          })
        })]
      })
    })]
  }) : null
}