/** Chunk was on web.js **/
/** chunk id: 226625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk202841 = require("./202841.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk901976 = require("./901976.js");
let p = 90,
  h = 20,
  m = {
    mass: 10,
    tension: 550,
    friction: 140
  };

function g(e) {
  let {
    className: t,
    pageMultiplier: n
  } = e, o = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), [s, g] = i.useState({
    x: 0,
    y: 0
  }), E = i.useMemo(() => l().throttle(e => {
    if (!o) g({
      x: (window.innerWidth - e.pageX * n) / p,
      y: (window.innerHeight - e.pageY * n) / p
    })
  }, h), [n, o]);
  i.useEffect(() => (window.addEventListener("mousemove", E), () => window.removeEventListener("mousemove", E)), [E]);
  let [b, y] = (0, d.q_F)(() => ({
    x: 0,
    y: 0,
    config: m
  }));
  return i.useEffect(() => {
    y({
      x: s.x,
      y: s.y
    })
  }, [s.x, s.y, y]), (0, r.jsx)(c.animated.div, {
    style: {
      transform: (0, c.to)([b.x, b.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
    },
    className: a()(_.background, t)
  })
}