/** Chunk was on 67544 **/
/** chunk id: 81829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk763283 = require("./763283.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.js"),
  Chunk122846 = require("./122846.js"),
  Chunk225893 = require("./225893.js");

function p(e) {
  let {
    id: t,
    points: n,
    onFinished: s
  } = e, o = (0, i.q_F)({
    from: {
      x: 0,
      y: 0,
      opacity: 1
    },
    to: {
      x: 0,
      y: false,
      opacity: 0
    },
    config: {
      tension: 280,
      friction: 100
    },
    onRest: () => s(t)
  });
  return <a.animated.div className={d.point} style={o}>{<c.Z variant={"text-lg/medium"} color={n > 0 ? "always-white" : "status-danger"}>{n > 0 ? "+" : ""}{n}</c.Z>}{<img src={f} alt={u.intl.string(l.default.BropER)} />}</a.animated.div>
}

function m(e) {
  let {
    renderedPoints: t,
    onRemovePoint: n,
    offset: s = {
      x: 0,
      y: 0
    },
    fullWidth: a = true
  } = e;
  return <div className={o()(d.pointsAnimation, {
      [d.fullWidth]: a
    })} style={{
      left: s.x,
      top: s.y
    }}>{Object.keys(t).map(e => (0, r.jsx)(p, {
      id: e,
      points: t[e],
      onFinished: n
    }, e))}</div>
}