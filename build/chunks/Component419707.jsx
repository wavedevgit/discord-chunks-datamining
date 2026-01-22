/** Chunk was on 47841 **/
/** chunk id: 419707, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk301563 = require("./301563.js");
let f = Chunk64700.memo(function(e) {
  var t, n;
  let {
    renderHeader: l,
    children: f,
    isExpanded: g,
    isStuck: b,
    onExpand: m,
    disableAnimation: p,
    disableBackground: x
  } = e, [h, j] = i.useState(true), [O, y] = i.useState(false), {
    ref: v,
    height: A = 0
  } = (0, o.Ay)(), {
    ref: E,
    height: N = 0
  } = (0, o.Ay)(), [_, S] = i.useState(g), T = (0, c.zhh)({
    height: _ ? N + A : A,
    config: (t = function(e) {
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
    }({}, a.config.stiff), n = n = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t),
    onStart: () => {
      y(false)
    },
    onRest: () => {
      y(true)
    }
  }, h || p ? "animate-never" : "respect-motion-settings");
  return i.useLayoutEffect(() => {
    y(false), S(g)
  }, [g]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      j(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)(c.DUT, {
    className: s()(u.Lo, {
      [u.$M]: g,
      [u._$]: x
    }),
    children: (0, r.jsxs)(a.animated.div, {
      className: s()(u.N0, {
        [u.Mm]: g && O
      }),
      style: T,
      children: [(0, r.jsx)(c.DUT, {
        innerRef: v,
        onClick: b ? true : m,
        className: s()(u.MU, {
          [u.$M]: g && b
        }),
        "aria-label": d.intl.string(d.t.dcl9MQ),
        children: l
      }), (0, r.jsx)("div", {
        ref: E,
        children: f
      })]
    })
  })
})