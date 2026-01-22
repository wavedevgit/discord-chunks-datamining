/** Chunk was on 823 **/
/** chunk id: 713290, original params: r,e,c (module,exports,require) **/
require.r(exports), require.d(exports, {
  BadgeImageWithProgressCircle: () => i,
  default: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk349941 = require("./349941.js"),
  Chunk158954 = require("./158954.js"),
  Chunk736653 = require("./736653.js"),
  Chunk209270 = require("./209270.jsx"),
  Chunk626108 = require("./626108.js");
let i = r => {
    let {
      src: e,
      alt: c,
      progressCircleText: i,
      progressCirclePercent: d,
      progressCircleUrgency: h
    } = r, u = (0, o.Ay)();
    return (0, a.jsxs)("div", {
      className: n.mI,
      children: [(0, a.jsx)("img", {
        alt: c,
        src: e,
        className: n.pq
      }), null != i && null != d && null != h && (0, a.jsx)("div", {
        className: n.$t,
        children: (0, a.jsx)(l.A, {
          innerRingPercent: d,
          outerRingColor: "critical" === h ? "var(--red-new-74)" : "var(--opacity-orange-36)",
          innerRingColor: "critical" === h ? "var(--red-new-43)" : "var(--opacity-orange-96)",
          strokeWidth: 7,
          backgroundCircleColor: (0, t.Mw)(u) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
          backgroundCircleBlurAmount: 2,
          children: (0, a.jsx)(s.EYj, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: i
          })
        })
      })]
    })
  },
  d = i