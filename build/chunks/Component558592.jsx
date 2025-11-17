/** Chunk was on 84735 **/
/** chunk id: 558592, original params: r,e,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  BadgeImageWithProgressCircle: () => i,
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk925477 = require("./925477.js"),
  Chunk410030 = require("./410030.js"),
  Chunk457082 = require("./457082.jsx"),
  Chunk768917 = require("./768917.js");
let i = r => {
    let {
      src: e,
      alt: a,
      progressCircleText: i,
      progressCirclePercent: l,
      progressCircleUrgency: d
    } = r, g = (0, o.ZP)();
    return (0, c.jsxs)("div", {
      className: t.badgeImageContainer,
      children: [(0, c.jsx)("img", {
        alt: a,
        src: e,
        className: t.badgeImage
      }), null != i && null != l && null != d && (0, c.jsx)("div", {
        className: t.progressCircleContainer,
        children: (0, c.jsx)(s.Z, {
          innerRingPercent: l,
          outerRingColor: "critical" === d ? "var(--red-new-74)" : "var(--opacity-orange-36)",
          innerRingColor: "critical" === d ? "var(--red-new-43)" : "var(--opacity-orange-96)",
          strokeWidth: 7,
          backgroundCircleColor: (0, n.wj)(g) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
          backgroundCircleBlurAmount: 2,
          children: (0, c.jsx)("span", {
            className: t.progressCircleText,
            children: i
          })
        })
      })]
    })
  },
  l = i