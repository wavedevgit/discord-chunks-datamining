/** Chunk was on 92339 **/
/** chunk id: 184100, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527224 = require("./527224.js");

function c(e) {
  let {
    onClose: t,
    initialPercent: i,
    numActions: c
  } = e, [h, l] = a.useState(i), {
    createMultipleConfetti: p
  } = a.useContext(r.h);
  return a.useEffect(() => {
    setTimeout(() => l(1), 200), setTimeout(() => {
      let e = window.innerWidth / 2,
        t = window.innerHeight / 2;
      p({
        position: {
          type: "static-random",
          minValue: {
            x: e - 5,
            y: t - 5
          },
          maxValue: {
            x: e + 5,
            y: t + 5
          }
        }
      }, 25)
    }, 700), setTimeout(t, 2e3)
  }, [p, t]), (0, n.jsxs)("div", {
    children: [(0, n.jsx)(o.Heading, {
      className: u.heading,
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: d.intl.format(d.t.pGj5u2, {
        count: c
      })
    }), (0, n.jsx)(o.Exd, {
      foregroundGradientColor: [s.Z.unsafe_rawColors.GREEN_300.css, s.Z.unsafe_rawColors.GREEN_230.css],
      percent: 100 * h,
      animate: true
    })]
  })
}