/** Chunk was on 63893 **/
/** chunk id: 455796, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk375554 = require("./375554.js");

function c(e) {
  let {
    onClose: t,
    initialPercent: s,
    numActions: c
  } = e, [l, p] = i.useState(s), {
    createMultipleConfetti: x
  } = i.useContext(r.x);
  return i.useEffect(() => {
    setTimeout(() => p(1), 200), setTimeout(() => {
      let e = window.innerWidth / 2,
        t = window.innerHeight / 2;
      x({
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
  }, [x, t]), (0, a.jsxs)("div", {
    children: [(0, a.jsx)(o.Heading, {
      className: d.R,
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: u.intl.format(u.t.pGj5u2, {
        count: c
      })
    }), (0, a.jsx)(o.kej, {
      foregroundGradientColor: [n.A.unsafe_rawColors.GREEN_300.css, n.A.unsafe_rawColors.GREEN_230.css],
      percent: 100 * l,
      animate: true
    })]
  })
}