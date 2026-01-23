/** Chunk was on 47841 **/
/** chunk id: 767822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk627794 = require("./627794.js"),
  Chunk53594 = require("./53594.js"),
  Chunk268749 = require("./268749.js"),
  Chunk690420 = require("./690420.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk522743 = require("./522743.js");

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

function b(e) {
  let {
    guildId: t,
    triggerType: n
  } = e, b = i.useMemo(() => () => (0, o._I)(t, n), [t, n]), [h] = i.useState(b), [x, j] = i.useState(false), {
    editingRule: _,
    createNewEditingRule: O
  } = (0, d.U)(), {
    getDefaultRuleName: v
  } = c.i$[n], y = !(0, o.wC)(_) && (null == _ ? true : _.triggerType) === n, [A, E] = i.useState(y ? _ : h), N = (0, a.zhh)({
    opacity: +!y,
    pointerEvents: y ? "none" : "all",
    config: f(p({}, l.config.stiff), {
      clamp: true
    })
  }), S = (0, a.zhh)({
    opacity: +!!y,
    pointerEvents: y ? "all" : "none",
    config: f(p({}, l.config.stiff), {
      clamp: true
    }),
    onStart: () => {
      E(y ? _ : h)
    },
    onRest: () => {
      E(y ? _ : h), j(y)
    }
  });
  return null == _ || y ? (0, r.jsxs)("div", {
    className: m.$F,
    style: {
      height: y ? "auto" : "60px"
    },
    children: [(0, r.jsx)(l.animated.div, {
      className: m.pT,
      style: S,
      children: (0, r.jsx)(u.A, {
        rule: A,
        persistEdit: x
      })
    }), (0, r.jsx)(l.animated.div, {
      className: m.animatedNewRuleContainer,
      style: N,
      children: (0, r.jsxs)(a.DUT, {
        className: m.Y0,
        onClick: () => {
          O(t, n)
        },
        children: [(0, r.jsx)(a.U1e, {
          size: "custom",
          width: 20,
          height: 20,
          color: s.A.unsafe_rawColors.BLUE_345.css,
          className: m.WW
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: g.intl.format(g.t.dNjRAf, {
            ruleName: v()
          })
        })]
      })
    })]
  }) : null
}