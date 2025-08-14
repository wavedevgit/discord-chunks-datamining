/** Chunk was on 67544 **/
/** chunk id: 664616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk668826 = require("./668826.js"),
  Chunk359013 = require("./359013.js"),
  Chunk284539 = require("./284539.js"),
  Chunk26141 = require("./26141.jsx"),
  Chunk18582 = require("./18582.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk392449 = require("./392449.js"),
  Chunk91776 = require("./91776.js"),
  Chunk276626 = require("./276626.js"),
  Chunk874641 = require("./874641.js"),
  Chunk884994 = require("./884994.js"),
  Chunk930961 = require("./930961.js"),
  Chunk732513 = require("./732513.js"),
  Chunk391291 = require("./391291.js"),
  Chunk895401 = require("./895401.js"),
  Chunk191351 = require("./191351.js"),
  Chunk40050 = require("./40050.js"),
  Chunk236954 = require("./236954.js");
let _ = {
  0: [require("./617627.js"), require("./200445.js"), require("./714530.js"), require("./9997.js"), require("./550796.js")],
  1: [require("./731544.js"), require("./904194.js"), require("./96599.js"), require("./590881.js")],
  2: [Chunk930961, Chunk732513, Chunk391291, Chunk895401],
  3: [Chunk191351, Chunk40050, Chunk236954],
  4: [Chunk91776, Chunk276626, Chunk874641, Chunk884994]
};

function C(e) {
  var t;
  let {
    isPaused: n
  } = e, [o, m] = (0, l.Z)(f.yN.PET_WUMPUS), g = null != (t = o.state) ? t : 2, b = c.Mq[f.yN.PET_WUMPUS], y = _[g], h = (0, s.useCallback)(() => {
    0 === g && m({
      state: 1
    })
  }, [m, g]), x = (0, s.useCallback)(() => {
    2 === g ? ((0, i.KH)(f.yN.PET_WUMPUS, b.points), m({
      state: 3
    })) : 3 === g ? .2 > Math.random() ? m({
      state: 4
    }) : m({
      state: 2
    }) : 1 === g ? m({
      state: 2
    }) : 4 === g && m({
      state: 0
    })
  }, [b.points, m, g]);
  return (0, r.jsx)(d.Z, {
    className: a()(p.outer, {
      [p.clickable]: 0 === g
    }),
    onClick: h,
    children: (0, r.jsx)(u.Z, {
      className: p.image,
      sources: y,
      interval: 500,
      isPaused: n,
      onLoopEnd: x
    })
  })
}