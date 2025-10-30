/** Chunk was on 95017 **/
/** chunk id: 226625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk13941 = require("./13941.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk901976 = require("./901976.js");
let h = {
  mass: 10,
  tension: 550,
  friction: 140
};

function x(e) {
  let {
    className: t,
    pageMultiplier: n
  } = e, l = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), [o, x] = r.useState({
    x: 0,
    y: 0
  }), g = r.useMemo(() => s().throttle(e => {
    if (!l) x({
      x: (window.innerWidth - e.pageX * n) / 90,
      y: (window.innerHeight - e.pageY * n) / 90
    })
  }, 20), [n, l]);
  r.useEffect(() => (window.addEventListener("mousemove", g), () => window.removeEventListener("mousemove", g)), [g]);
  let [f, b] = (0, u.q_F)(() => ({
    x: 0,
    y: 0,
    config: h
  }));
  return r.useEffect(() => {
    b({
      x: o.x,
      y: o.y
    })
  }, [o.x, o.y, b]), (0, a.jsx)(c.animated.div, {
    style: {
      transform: (0, c.to)([f.x, f.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
    },
    className: i()(p.background, t)
  })
}