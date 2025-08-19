/** Chunk was on 45620 **/
/** chunk id: 302933, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk873546 = require("./873546.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168020 = require("./168020.jsx"),
  Chunk779485 = require("./779485.js");
let g = Chunk647438.memo(function(e) {
  let {
    countdownTimerBlock: t,
    isVisible: r,
    isFullScreen: l
  } = e, a = (0, u.q_F)({
    transform: "translateX(-50%) ".concat(r ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!r,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, n.jsxs)(o.animated.div, {
    className: i()([p.countDownWrapper, l && p.fullScreenWrapper, s.tq && p.mobileWrapper]),
    role: "status",
    style: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, a, null != t.bannerUrl && "" !== t.bannerUrl && {
      backgroundImage: "url(".concat(t.bannerUrl, ")"),
      backgroundSize: "cover",
      backgroundPosition: "top"
    }),
    children: [(0, n.jsxs)(c.k, {
      direction: c.k.Direction.VERTICAL,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/medium",
        className: p.countdownLabel,
        style: null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true,
        children: t.title
      }), null != t.body && "" !== t.body && (0, n.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: p.countdownBody,
        style: null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true,
        children: t.body
      })]
    }), (0, n.jsx)(d.R, {
      endDate: t.endTime
    })]
  })
})