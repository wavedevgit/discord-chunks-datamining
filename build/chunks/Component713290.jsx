/** Chunk was on 823 **/
/** chunk id: 713290, original params: r,a,e (module,exports,require) **/
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
      src: a,
      alt: e,
      progressCircleText: i,
      progressCirclePercent: d,
      progressCircleUrgency: u
    } = r, h = (0, o.Ay)();
    return (0, c.jsxs)("div", {
      className: l.mI,
      children: [(0, c.jsx)("img", {
        alt: e,
        src: a,
        className: l.pq
      }), null != i && null != d && null != u && (0, c.jsx)("div", {
        className: l.$t,
        children: (0, c.jsx)(n.A, {
          innerRingPercent: d,
          outerRingColor: "critical" === u ? "var(--red-new-74)" : "var(--opacity-orange-36)",
          innerRingColor: "critical" === u ? "var(--red-new-43)" : "var(--opacity-orange-96)",
          strokeWidth: 7,
          backgroundCircleColor: (0, t.Mw)(h) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
          backgroundCircleBlurAmount: 2,
          children: (0, c.jsx)(s.EYj, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: i
          })
        })
      })]
    })
  },
  d = i