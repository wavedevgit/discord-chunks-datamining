/** Chunk was on 67544 **/
/** chunk id: 382788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk359013 = require("./359013.js"),
  Chunk529942 = require("./529942.jsx"),
  Chunk26141 = require("./26141.jsx"),
  Chunk3072 = require("./3072.js"),
  Chunk401258 = require("./401258.js"),
  Chunk477839 = require("./477839.js"),
  Chunk364491 = require("./364491.js"),
  Chunk438390 = require("./438390.js"),
  Chunk768044 = require("./768044.js");
let Chunk281264 = require("./281264.js");

function m(e) {
  let {
    isPaused: t,
    width: n
  } = e;
  return (0, i.is)(p, t), (0, r.jsx)(o.Z, {
    className: u.bee,
    width: n,
    minSteps: 50,
    maxSteps: 100,
    minYDistance: false,
    maxYDistance: 5,
    maxYDelta: 2,
    minSpeed: 80,
    maxSpeed: 150,
    imageSize: 80,
    isPaused: t,
    children: e => (0, r.jsx)(a.Z, {
      className: "left" === e ? u.imageFlipped : u.image,
      isPaused: t,
      interval: 150,
      sources: [d, f]
    })
  })
}

function g(e) {
  let {
    isPaused: t,
    width: n
  } = e, o = s.Mq[l.yN.BEE];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      interval: 1e3,
      pointsPerInterval: o.points,
      isPaused: t,
      itemId: l.yN.BEE
    }), (0, r.jsx)(m, {
      isPaused: t,
      width: n
    })]
  })
}