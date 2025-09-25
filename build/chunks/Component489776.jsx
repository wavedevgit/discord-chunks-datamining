/** Chunk was on 64523 **/
/** chunk id: 489776, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk6383 = require("./6383.js"),
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
  } = e, h = i.useMemo(() => () => (0, o.ep)(t, n), [t, n]), [x] = i.useState(h), [b, j] = i.useState(false), {
    editingRule: v,
    createNewEditingRule: _
  } = (0, d.V)(), {
    getDefaultRuleName: O
  } = c.I6[n], y = !(0, o.Vb)(v) && (null == v ? true : v.triggerType) === n, [C, N] = i.useState(y ? v : x), E = (0, a.q_F)({
    opacity: +!y,
    pointerEvents: y ? "none" : "all",
    config: f(p({}, l.config.stiff), {
      clamp: true
    })
  }), I = (0, a.q_F)({
    opacity: +!!y,
    pointerEvents: y ? "all" : "none",
    config: f(p({}, l.config.stiff), {
      clamp: true
    }),
    onStart: () => {
      N(y ? v : x)
    },
    onRest: () => {
      N(y ? v : x), j(y)
    }
  });
  return null == v || y ? (0, r.jsxs)("div", {
    className: g.mainRuleContainer,
    style: {
      height: y ? "auto" : "60px"
    },
    children: [(0, r.jsx)(l.animated.div, {
      className: g.animatedRuleCardContainer,
      style: I,
      children: (0, r.jsx)(u.Z, {
        rule: C,
        persistEdit: b
      })
    }), (0, r.jsx)(l.animated.div, {
      className: g.animatedNewRuleContainer,
      style: E,
      children: (0, r.jsxs)(a.P3F, {
        className: g.addAnotherRuleCardContainer,
        onClick: () => {
          _(t, n)
        },
        children: [(0, r.jsx)(a.oFk, {
          size: "custom",
          width: 20,
          height: 20,
          color: s.Z.BLUE_345,
          className: g.plusIcon
        }), (0, r.jsx)(a.Text, {
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