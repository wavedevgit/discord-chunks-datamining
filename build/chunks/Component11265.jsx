/** Chunk was on 384 **/
/** chunk id: 11265, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165121 = require("./165121.js");
let g = Chunk473749.memo(function(e) {
  var t, n;
  let {
    renderHeader: l,
    children: g,
    isExpanded: m,
    isStuck: p,
    onExpand: f,
    disableAnimation: h,
    disableBackground: x
  } = e, [b, j] = i.useState(true), [_, v] = i.useState(false), {
    ref: O,
    height: C = 0
  } = (0, c.ZP)(), {
    ref: y,
    height: N = 0
  } = (0, c.ZP)(), [E, I] = i.useState(m), S = (0, o.q_F)({
    height: E ? N + C : C,
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
      v(false)
    },
    onRest: () => {
      v(true)
    }
  }, b || h ? "animate-never" : "respect-motion-settings");
  return i.useLayoutEffect(() => {
    v(false), I(m)
  }, [m]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      j(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)(o.P3F, {
    className: s()(d.editCard, {
      [d.toggled]: m,
      [d.noBackground]: x
    }),
    children: (0, r.jsxs)(a.animated.div, {
      className: s()(d.contentExpandContainer, {
        [d.showOverflow]: m && _
      }),
      style: S,
      children: [(0, r.jsx)(o.P3F, {
        innerRef: O,
        onClick: p ? true : f,
        className: s()(d.innerHeader, {
          [d.toggled]: m && p
        }),
        "aria-label": u.intl.string(u.t.dcl9MQ),
        children: l
      }), (0, r.jsx)("div", {
        ref: y,
        children: g
      })]
    })
  })
})