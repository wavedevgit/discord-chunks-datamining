/** Chunk was on 1272 **/
/** chunk id: 77878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk981631 = require("./981631.js"),
  Chunk365778 = require("./365778.js");
let o = "1",
  c = "2",
  u = "3",
  d = "4",
  p = "5",
  f = "6",
  h = "1",
  g = "2",
  m = "3",
  _ = "4",
  b = "5",
  E = {
    [Chunk981631.aIt.ESRB]: {
      [o]: Chunk365778.esrbEveryone,
      [c]: Chunk365778.esrbEveryoneTenPlus,
      [u]: Chunk365778.esrbTeen,
      [d]: Chunk365778.esrbMature,
      [p]: Chunk365778.esrbAdult,
      [f]: Chunk365778.esrbRatingPending
    },
    [Chunk981631.aIt.PEGI]: {
      [h]: Chunk365778.pegiThree,
      [g]: Chunk365778.pegiSeven,
      [m]: Chunk365778.pegiTwelve,
      [_]: Chunk365778.pegiSixteen,
      [b]: Chunk365778.pegiEighteen
    }
  },
  O = e => {
    let {
      agency: t,
      rating: n,
      className: i
    } = e, a = E[t][n];
    return null == a ? null : (0, r.jsx)("div", {
      className: l()(s.contentRating, a, i)
    })
  }