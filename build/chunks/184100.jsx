/** Chunk was on 92339 **/
/** chunk id: 184100, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk745510 = require("./745510.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk366257 = require("./366257.js");

function h(e) {
  let {
    onClose: t,
    initialPercent: i,
    numActions: h
  } = e, [l, p] = a.useState(i), {
    createMultipleConfetti: m
  } = a.useContext(s.h);
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
  }, [m, t]), <div>{<o.X6q className={c.heading} variant={"heading-xl/semibold"} color={"header-primary"}>{u.intl.format(u.t.pGj5u7, {
        count: h
      })}</o.X6q>}{<o.Exd foregroundGradientColor={[(0, r.Lq)(d.Ilk.GREEN_300), (0, r.Lq)(d.Ilk.GREEN_230)]} percent={100 * l} animate={true} />}</div>
}