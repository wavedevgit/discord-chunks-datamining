/** Chunk was on 67544 **/
/** chunk id: 360247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk359013 = require("./359013.js"),
  Chunk401258 = require("./401258.js"),
  Chunk477839 = require("./477839.js"),
  Chunk176262 = require("./176262.js"),
  Chunk34768 = require("./34768.js");

function d(e) {
  let {
    isPaused: t
  } = e, n = (0, s.useRef)(null), d = a.Mq[c.yN.POURING_WATER].points;
  return (0, s.useEffect)(() => {
    var e, r;
    t ? null == (e = n.current) || e.pause() : null == (r = n.current) || r.play()
  }, [t]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Z, {
      ref: n,
      className: l.video,
      src: u.Z,
      loop: true,
      muted: true,
      playsInline: true,
      autoPlay: true
    }), (0, r.jsx)(i.Z, {
      itemId: c.yN.AT_SOMEONE,
      pointsPerInterval: d,
      interval: 1e3,
      isPaused: t
    })]
  })
}