/** Chunk was on 67544 **/
/** chunk id: 157511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk359013 = require("./359013.js"),
  Chunk120421 = require("./120421.js"),
  Chunk284539 = require("./284539.js"),
  Chunk3072 = require("./3072.js"),
  Chunk401258 = require("./401258.js"),
  Chunk477839 = require("./477839.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk147722 = require("./147722.js"),
  Chunk599643 = require("./599643.js");
let Chunk288874 = require("./288874.js"),
  y = 100 / Chunk477839.tH;

function h(e) {
  var t;
  let {
    isPaused: n
  } = e, h = (0, o.e7)([i.Z], () => i.Z.getNumPurchasesForItemUpgrade(d.yN.SUN, d.uv.SUN_RAISE)), x = a.Mq[d.yN.SUN], v = (0, s.useMemo)(() => x.getPoints(h), [h, x]), O = (0, l.eR)(b), [j, N] = (0, c.Z)(d.yN.SUN), P = null != (t = j.lastPlayedSunRiseSound) ? t : 0, _ = h * y, C = 120 + 16 * h, Z = -C / 5;
  return (0, s.useEffect)(() => {
    h > P && (O(), N({
      lastPlayedSunRiseSound: h
    }))
  }, [O, h, P, N]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      className: m.sun,
      style: {
        bottom: "calc(".concat(_, "% - ").concat(C / 2, "px)"),
        right: Z,
        width: C,
        height: C
      },
      src: g,
      alt: p.intl.string(f.default.JTkCcX)
    }), (0, r.jsx)(u.Z, {
      itemId: d.yN.SUN,
      pointsPerInterval: v,
      interval: 1e3,
      isPaused: n
    })]
  })
}