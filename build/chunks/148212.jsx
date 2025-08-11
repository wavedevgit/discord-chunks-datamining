/** Chunk was on 67544 **/
/** chunk id: 148212, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk359013 = require("./359013.js"),
  Chunk529942 = require("./529942.js"),
  Chunk26141 = require("./26141.jsx"),
  Chunk3072 = require("./3072.js"),
  Chunk401258 = require("./401258.js"),
  Chunk477839 = require("./477839.js"),
  Chunk364491 = require("./364491.js"),
  Chunk979233 = require("./979233.js"),
  Chunk975620 = require("./975620.js");
let Chunk972479 = require("./972479.js");

function m(e) {
  let {
    isPaused: t,
    width: n
  } = e;
  return <o.Z className={u.ant} width={n} minSpeed={20} maxSpeed={40} imageSize={80} isPaused={t}>{e => (0, r.jsx)(a.Z, {
      className: "left" === e ? u.imageFlipped : u.image,
      isPaused: t,
      interval: 150,
      sources: [d, f]
    })}</o.Z>
}

function g(e) {
  let {
    isPaused: t,
    width: n
  } = e, o = s.Mq[l.yN.ANT];
  return (0, i.is)(p, t), <r.Fragment>{<c.Z interval={1e3} pointsPerInterval={o.points} isPaused={t} itemId={l.yN.ANT} />}{<m isPaused={t} width={n} />}</r.Fragment>
}