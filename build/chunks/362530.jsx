/** Chunk was on 67544 **/
/** chunk id: 362530, original params: e,t,n (module,exports,require) **/
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
  Chunk429413 = require("./429413.js"),
  Chunk883538 = require("./883538.js");
let Chunk935418 = require("./935418.js");

function m(e) {
  let {
    isPaused: t,
    width: n
  } = e;
  return <o.Z className={u.worm} width={n} minSpeed={10} maxSpeed={20} imageSize={80} isPaused={t}>{e => (0, r.jsx)(a.Z, {
      className: "left" === e ? u.imageFlipped : u.image,
      isPaused: t,
      interval: 1500,
      sources: [d, f]
    })}</o.Z>
}

function g(e) {
  let {
    isPaused: t,
    width: n
  } = e, o = s.Mq[l.yN.WORM];
  return (0, i.is)(p, t), <r.Fragment>{<c.Z interval={1e3} pointsPerInterval={o.points} isPaused={t} itemId={l.yN.WORM} />}{<m isPaused={t} width={n} />}</r.Fragment>
}