/** Chunk was on 6043 **/
/** chunk id: 226625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk554916 = require("./554916.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk779717 = require("./779717.js");
let f = {
  mass: 10,
  tension: 550,
  friction: 140
};

function h(e) {
  let {
    className: t,
    pageMultiplier: n
  } = e, i = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), [s, h] = r.useState({
    x: 0,
    y: 0
  }), x = r.useMemo(() => o().throttle(e => {
    if (!i) h({
      x: (window.innerWidth - e.pageX * n) / 90,
      y: (window.innerHeight - e.pageY * n) / 90
    })
  }, 20), [n, i]);
  r.useEffect(() => (window.addEventListener("mousemove", x), () => window.removeEventListener("mousemove", x)), [x]);
  let [b, g] = (0, u.q_F)(() => ({
    x: 0,
    y: 0,
    config: f
  }));
  return r.useEffect(() => {
    g({
      x: s.x,
      y: s.y
    })
  }, [s.x, s.y, g]), (0, a.jsx)(c.animated.div, {
    style: {
      transform: (0, c.to)([b.x, b.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
    },
    className: l()(p.background, t)
  })
}