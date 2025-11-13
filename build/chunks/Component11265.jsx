/** Chunk was on 384 **/
/** chunk id: 11265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk203463 = require("./203463.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165121 = require("./165121.js");
let g = Chunk647438.memo(function(e) {
  var t, n;
  let {
    renderHeader: l,
    children: g,
    isExpanded: m,
    isStuck: p,
    onExpand: f,
    disableAnimation: h,
    disableBackground: b
  } = e, [x, j] = i.useState(true), [_, v] = i.useState(false), {
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
      v(false)
    },
    onRest: () => {
      v(true)
    }
  }, x || h ? "animate-never" : "respect-motion-settings");
  return i.useLayoutEffect(() => {
    v(false), I(m)
  }, [m]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      j(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)(o.P3F, {
    className: a()(u.editCard, {
      [u.toggled]: m,
      [u.noBackground]: b
    }),
    children: (0, r.jsxs)(s.animated.div, {
      className: a()(u.contentExpandContainer, {
        [u.showOverflow]: m && _
      }),
      style: S,
      children: [(0, r.jsx)(o.P3F, {
        innerRef: O,
        onClick: p ? true : f,
        className: a()(u.innerHeader, {
          [u.toggled]: m && p
        }),
        "aria-label": d.intl.string(d.t.dcl9MQ),
        children: l
      }), (0, r.jsx)("div", {
        ref: y,
        children: g
      })]
    })
  })
})