/** Chunk was on 59275 **/
/** chunk id: 666413, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk607399 = require("./607399.js"),
  Chunk946015 = require("./946015.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk854818 = require("./854818.jsx"),
  Chunk410885 = require("./410885.js");
let b = Chunk64700.memo(function(e) {
  let {
    countdownTimerBlock: t,
    isVisible: l
  } = e, r = (0, u.zhh)({
    transform: "translateX(-50%) ".concat(l ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!l,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, n.jsxs)(i.animated.div, {
    className: a()([f.lP, o.Fr && f.yJ]),
    role: "status",
    style: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = l[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, r, null != t.bannerUrl && "" !== t.bannerUrl && {
      backgroundImage: "url(".concat(t.bannerUrl, ")"),
      backgroundSize: "cover",
      backgroundPosition: "top"
    }),
    children: [(0, n.jsxs)(c.s, {
      direction: c.s.Direction.VERTICAL,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/medium",
        className: f.Wx,
        style: null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true,
        children: t.title
      }), null != t.body && "" !== t.body && (0, n.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: f.w9,
        style: null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true,
        children: t.body
      })]
    }), (0, n.jsx)(d.e, {
      endDate: t.endTime
    })]
  })
})