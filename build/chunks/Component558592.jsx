/** Chunk was on 84735 **/
/** chunk id: 558592, original params: e,r,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  BadgeImageWithProgressCircle: () => l,
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk925477 = require("./925477.js"),
  Chunk793030 = require("./793030.js"),
  Chunk410030 = require("./410030.js"),
  Chunk457082 = require("./457082.jsx"),
  Chunk164300 = require("./164300.js");
let l = e => {
    let {
      src: r,
      alt: a,
      progressCircleText: l,
      progressCirclePercent: d,
      progressCircleUrgency: g
    } = e, u = (0, t.ZP)();
    return (0, c.jsxs)("div", {
      className: i.badgeImageContainer,
      children: [(0, c.jsx)("img", {
        alt: a,
        src: r,
        className: i.badgeImage
      }), null != l && null != d && null != g && (0, c.jsx)("div", {
        className: i.progressCircleContainer,
        children: (0, c.jsx)(s.Z, {
          innerRingPercent: d,
          outerRingColor: "critical" === g ? "var(--red-new-74)" : "var(--opacity-orange-36)",
          innerRingColor: "critical" === g ? "var(--red-new-43)" : "var(--opacity-orange-96)",
          strokeWidth: 7,
          backgroundCircleColor: (0, n.wj)(u) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
          backgroundCircleBlurAmount: 2,
          children: (0, c.jsx)(o.xvT, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: l
          })
        })
      })]
    })
  },
  d = l