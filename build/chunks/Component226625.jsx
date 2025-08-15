/** Chunk was on 30202 **/
/** chunk id: 226625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk815061 = require("./815061.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk901976 = require("./901976.js");
let g = {
  mass: 10,
  tension: 550,
  friction: 140
};

function h(e) {
  let {
    className: t,
    pageMultiplier: n
  } = e, s = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), [l, h] = r.useState({
    x: 0,
    y: 0
  }), f = r.useMemo(() => o().throttle(e => {
    if (!s) h({
      x: (window.innerWidth - e.pageX * n) / 90,
      y: (window.innerHeight - e.pageY * n) / 90
    })
  }, 20), [n, s]);
  r.useEffect(() => (window.addEventListener("mousemove", f), () => window.removeEventListener("mousemove", f)), [f]);
  let [b, x] = (0, u.q_F)(() => ({
    x: 0,
    y: 0,
    config: g
  }));
  return r.useEffect(() => {
    x({
      x: l.x,
      y: l.y
    })
  }, [l.x, l.y, x]), (0, i.jsx)(c.animated.div, {
    style: {
      transform: (0, c.to)([b.x, b.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
    },
    className: a()(p.background, t)
  })
}