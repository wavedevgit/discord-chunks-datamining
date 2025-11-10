/** Chunk was on 92339 **/
/** chunk id: 184100, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk330084 = require("./330084.js");

function h(e) {
  let {
    onClose: t,
    initialPercent: i,
    numActions: h
  } = e, [l, p] = a.useState(i), {
    createMultipleConfetti: m
  } = a.useContext(r.h);
  return a.useEffect(() => {
    setTimeout(() => p(1), 200), setTimeout(() => {
      let e = window.innerWidth / 2,
        t = window.innerHeight / 2;
      m({
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
  }, [m, t]), (0, n.jsxs)("div", {
    children: [(0, n.jsx)(o.Heading, {
      className: c.heading,
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: u.intl.format(u.t.pGj5u2, {
        count: h
      })
    }), (0, n.jsx)(o.Exd, {
      foregroundGradientColor: [(0, d.Lq)(s.Ilk.GREEN_300), (0, d.Lq)(s.Ilk.GREEN_230)],
      percent: 100 * l,
      animate: true
    })]
  })
}