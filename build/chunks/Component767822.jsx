/** Chunk was on 47841 **/
/** chunk id: 767822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
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

function b(e) {
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
  } = e, p = i.useMemo(() => () => (0, c._I)(t, n), [t, n]), [x] = i.useState(p), [h, j] = i.useState(false), {
    editingRule: O,
    createNewEditingRule: y
  } = (0, d.U)(), {
    getDefaultRuleName: v
  } = o.i$[n], A = !(0, c.wC)(O) && (null == O ? true : O.triggerType) === n, [E, N] = i.useState(A ? O : x), _ = (0, a.zhh)({
    opacity: +!A,
    pointerEvents: A ? "none" : "all",
    config: m(b({}, l.config.stiff), {
      clamp: true
    })
  }), S = (0, a.zhh)({
    opacity: +!!A,
    pointerEvents: A ? "all" : "none",
    config: m(b({}, l.config.stiff), {
      clamp: true
    }),
    onStart: () => {
      N(A ? O : x)
    },
    onRest: () => {
      N(A ? O : x), j(A)
    }
  });
  return null == O || A ? (0, r.jsxs)("div", {
    className: g.$F,
    style: {
      height: A ? "auto" : "60px"
    },
    children: [(0, r.jsx)(l.animated.div, {
      className: g.pT,
      style: S,
      children: (0, r.jsx)(u.A, {
        rule: E,
        persistEdit: h
      })
    }), (0, r.jsx)(l.animated.div, {
      className: g.animatedNewRuleContainer,
      style: _,
      children: (0, r.jsxs)(a.DUT, {
        className: g.Y0,
        onClick: () => {
          y(t, n)
        },
        children: [(0, r.jsx)(a.U1e, {
          size: "custom",
          width: 20,
          height: 20,
          color: s.A.unsafe_rawColors.BLUE_345.css,
          className: g.WW
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: f.intl.format(f.t.dNjRAf, {
            ruleName: v()
          })
        })]
      })
    })]
  }) : null
}