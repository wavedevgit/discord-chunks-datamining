/** Chunk was on 45620 **/
/** chunk id: 302933, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk873546 = require("./873546.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168020 = require("./168020.jsx"),
  Chunk519103 = require("./519103.js");
let g = Chunk473749.memo(function(e) {
  let {
    countdownTimerBlock: t,
    isVisible: n
  } = e, l = (0, u.q_F)({
    transform: "translateX(-50%) ".concat(n ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!n,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, r.jsxs)(o.animated.div, {
    className: i()([f.countDownWrapper, s.tq && f.mobileWrapper]),
    role: "status",
    style: function(e) {
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
    }({}, l, null != t.bannerUrl && "" !== t.bannerUrl && {
      backgroundImage: "url(".concat(t.bannerUrl, ")"),
      backgroundSize: "cover",
      backgroundPosition: "top"
    }),
    children: [(0, r.jsxs)(c.k, {
      direction: c.k.Direction.VERTICAL,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        className: f.countdownLabel,
        style: null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true,
        children: t.title
      }), null != t.body && "" !== t.body && (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: f.countdownBody,
        style: null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true,
        children: t.body
      })]
    }), (0, r.jsx)(d.R, {
      endDate: t.endTime
    })]
  })
})