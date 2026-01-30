/** Chunk was on 87557 **/
/** chunk id: 41280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk970984 = require("./970984.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk314098 = require("./314098.js");
let h = {
  mass: 10,
  tension: 550,
  friction: 140
};

function x(e) {
  let {
    className: t,
    pageMultiplier: n
  } = e, r = (0, d.bG)([m.A], () => m.A.useReducedMotion), [s, x] = l.useState({
    x: 0,
    y: 0
  }), g = l.useMemo(() => o().throttle(e => {
    r || x({
      x: (window.innerWidth - e.pageX * n) / 90,
      y: (window.innerHeight - e.pageY * n) / 90
    })
  }, 20), [n, r]);
  l.useEffect(() => (window.addEventListener("mousemove", g), () => window.removeEventListener("mousemove", g)), [g]);
  let [f, b] = (0, u.zhh)(() => ({
    x: 0,
    y: 0,
    config: h
  }));
  return l.useEffect(() => {
    b({
      x: s.x,
      y: s.y
    })
  }, [s.x, s.y, b]), (0, a.jsx)(c.animated.div, {
    style: {
      transform: (0, c.to)([f.x, f.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
    },
    className: i()(p.T, t)
  })
}