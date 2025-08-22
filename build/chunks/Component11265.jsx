/** Chunk was on 6049 **/
/** chunk id: 11265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165121 = require("./165121.js");
let m = Chunk647438.memo(function(e) {
  var t, n;
  let {
    renderHeader: l,
    children: m,
    isExpanded: g,
    isStuck: p,
    onExpand: h,
    disableAnimation: f,
    disableBackground: b
  } = e, [x, j] = i.useState(true), [v, _] = i.useState(false), {
    ref: O,
    height: y = 0
  } = (0, c.ZP)(), {
    ref: C,
    height: N = 0
  } = (0, c.ZP)(), [E, I] = i.useState(g), S = (0, o.q_F)({
    height: E ? N + y : y,
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
      _(false)
    },
    onRest: () => {
      _(true)
    }
  }, x || f ? "animate-never" : "respect-motion-settings");
  return i.useLayoutEffect(() => {
    _(false), I(g)
  }, [g]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      j(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)(o.P3F, {
    className: a()(u.editCard, {
      [u.toggled]: g,
      [u.noBackground]: b
    }),
    children: (0, r.jsxs)(s.animated.div, {
      className: a()(u.contentExpandContainer, {
        [u.showOverflow]: g && v
      }),
      style: S,
      children: [(0, r.jsx)(o.P3F, {
        innerRef: O,
        onClick: p ? true : h,
        className: a()(u.innerHeader, {
          [u.toggled]: g && p
        }),
        "aria-label": d.intl.string(d.t.dcl9MT),
        children: l
      }), (0, r.jsx)("div", {
        ref: C,
        children: m
      })]
    })
  })
})