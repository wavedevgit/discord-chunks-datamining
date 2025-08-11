/** Chunk was on 45620 **/
/** chunk id: 302933, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk873546 = require("./873546.js"),
  Chunk435935 = require("./435935.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168020 = require("./168020.jsx"),
  Chunk326278 = require("./326278.js");
let g = Chunk73800.memo(function(e) {
  let {
    countdownTimerBlock: t,
    isVisible: n,
    isFullScreen: l
  } = e, a = (0, u.q_F)({
    transform: "translateX(-50%) ".concat(n ? "translateY(-75%)" : "translateY(0%)"),
    opacity: +!!n,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return <o.animated.div className={i()([p.countDownWrapper, l && p.fullScreenWrapper, s.tq && p.mobileWrapper])} role={"status"} style={function(e) {
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
    }({}, a, null != t.bannerUrl && "" !== t.bannerUrl && {
      backgroundImage: "url(".concat(t.bannerUrl, ")"),
      backgroundSize: "cover",
      backgroundPosition: "top"
    })}>{<c.k direction={c.k.Direction.VERTICAL}>{<u.Text variant={"text-md/medium"} className={p.countdownLabel} style={null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true}>{t.title}</u.Text>}{null != t.body && "" !== t.body && <u.Text variant={"text-sm/medium"} className={p.countdownBody} style={null != t.textColor && "" !== t.textColor ? {
          color: t.textColor
        } : true}>{t.body}</u.Text>}</c.k>}{<d.R endDate={t.endTime} />}</o.animated.div>
})