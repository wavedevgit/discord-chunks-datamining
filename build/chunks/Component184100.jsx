/** Chunk was on 92339 **/
/** chunk id: 184100, original params: e,t,n (module,exports,require) **/
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
    initialPercent: n,
    numActions: c
  } = e, [l, h] = s.useState(n), {
    createMultipleConfetti: f
  } = s.useContext(r.h);
  return s.useEffect(() => {
    setTimeout(() => h(1), 200), setTimeout(() => {
      let e = window.innerWidth / 2,
        t = window.innerHeight / 2;
      f({
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
  }, [f, t]), (0, i.jsxs)("div", {
    children: [(0, i.jsx)(o.Heading, {
      className: u.heading,
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: d.intl.format(d.t.pGj5u2, {
        count: c
      })
    }), (0, i.jsx)(o.Exd, {
      foregroundGradientColor: [a.Z.unsafe_rawColors.GREEN_300.css, a.Z.unsafe_rawColors.GREEN_230.css],
      percent: 100 * l,
      animate: true
    })]
  })
}