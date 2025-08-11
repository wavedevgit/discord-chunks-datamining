/** Chunk was on 67544 **/
/** chunk id: 803063, original params: e,t,n (module,exports,require) **/
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
  Chunk131336 = require("./131336.js"),
  Chunk149436 = require("./149436.js");
let Chunk358786 = require("./358786.js");

function m(e) {
  let {
    isPaused: t,
    width: n
  } = e;
  return <o.Z className={u.snail} width={n} minSpeed={10} maxSpeed={20} imageSize={80} isPaused={t}>{e => (0, r.jsx)(a.Z, {
      className: "left" === e ? u.imageFlipped : u.image,
      isPaused: t,
      interval: 1e3,
      sources: [d, f]
    })}</o.Z>
}

function g(e) {
  let {
    isPaused: t,
    width: n
  } = e, o = s.Mq[l.yN.SNAIL];
  return (0, i.is)(p, t), <r.Fragment>{<c.Z interval={1e3} pointsPerInterval={o.points} isPaused={t} itemId={l.yN.SNAIL} />}{<m isPaused={t} width={n} />}</r.Fragment>
}