/** Chunk was on 39048 **/
/** chunk id: 419707, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk301563 = require("./301563.js");
let g = Chunk64700.memo(function(e) {
  var t, n;
  let {
    renderHeader: l,
    children: g,
    isExpanded: m,
    isStuck: p,
    onExpand: f,
    disableAnimation: h,
    disableBackground: b
  } = e, [x, j] = i.useState(true), [_, O] = i.useState(false), {
    ref: v,
    height: y = 0
  } = (0, c.Ay)(), {
    ref: A,
    height: E = 0
  } = (0, c.Ay)(), [N, S] = i.useState(m), I = (0, o.zhh)({
    height: N ? E + y : y,
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
      O(false)
    },
    onRest: () => {
      O(true)
    }
  }, x || h ? "animate-never" : "respect-motion-settings");
  return i.useLayoutEffect(() => {
    O(false), S(m)
  }, [m]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      j(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)(o.DUT, {
    className: s()(u.Lo, {
      [u.$M]: m,
      [u._$]: b
    }),
    children: (0, r.jsxs)(a.animated.div, {
      className: s()(u.N0, {
        [u.Mm]: m && _
      }),
      style: I,
      children: [(0, r.jsx)(o.DUT, {
        innerRef: v,
        onClick: p ? true : f,
        className: s()(u.MU, {
          [u.$M]: m && p
        }),
        "aria-label": d.intl.string(d.t.dcl9MQ),
        children: l
      }), (0, r.jsx)("div", {
        ref: A,
        children: g
      })]
    })
  })
})