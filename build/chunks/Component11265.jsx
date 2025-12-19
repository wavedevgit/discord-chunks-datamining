/** Chunk was on 9536 **/
/** chunk id: 11265, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk807794 = require("./807794.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192072 = require("./192072.js");
let g = Chunk473749.memo(function(e) {
  var t, n;
  let {
    renderHeader: l,
    children: g,
    isExpanded: f,
    isStuck: m,
    onExpand: b,
    disableAnimation: p,
    disableBackground: h
  } = e, [x, j] = i.useState(true), [v, O] = i.useState(false), {
    ref: C,
    height: y = 0
  } = (0, c.ZP)(), {
    ref: N,
    height: E = 0
  } = (0, c.ZP)(), [I, S] = i.useState(f), _ = (0, o.q_F)({
    height: I ? E + y : y,
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
    }({}, s.config.stiff), n = n = {
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
  }, x || p ? "animate-never" : "respect-motion-settings");
  return i.useLayoutEffect(() => {
    O(false), S(f)
  }, [f]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      j(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)(o.P3F, {
    className: a()(u.editCard, {
      [u.toggled]: f,
      [u.noBackground]: h
    }),
    children: (0, r.jsxs)(s.animated.div, {
      className: a()(u.contentExpandContainer, {
        [u.showOverflow]: f && v
      }),
      style: _,
      children: [(0, r.jsx)(o.P3F, {
        innerRef: C,
        onClick: m ? true : b,
        className: a()(u.innerHeader, {
          [u.toggled]: f && m
        }),
        "aria-label": d.intl.string(d.t.dcl9MQ),
        children: l
      }), (0, r.jsx)("div", {
        ref: N,
        children: g
      })]
    })
  })
})