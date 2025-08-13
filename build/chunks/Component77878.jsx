/** Chunk was on 1272 **/
/** chunk id: 77878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk981631 = require("./981631.js"),
  Chunk553133 = require("./553133.js");
let s = "1",
  c = "2",
  u = "3",
  d = "4",
  p = "5",
  f = "6",
  h = "1",
  g = "2",
  m = "3",
  b = "4",
  _ = "5",
  O = {
    [Chunk981631.aIt.ESRB]: {
      [s]: Chunk553133.esrbEveryone,
      [c]: Chunk553133.esrbEveryoneTenPlus,
      [u]: Chunk553133.esrbTeen,
      [d]: Chunk553133.esrbMature,
      [p]: Chunk553133.esrbAdult,
      [f]: Chunk553133.esrbRatingPending
    },
    [Chunk981631.aIt.PEGI]: {
      [h]: Chunk553133.pegiThree,
      [g]: Chunk553133.pegiSeven,
      [m]: Chunk553133.pegiTwelve,
      [b]: Chunk553133.pegiSixteen,
      [_]: Chunk553133.pegiEighteen
    }
  },
  E = e => {
    let {
      agency: t,
      rating: n,
      className: i
    } = e, a = O[t][n];
    return null == a ? null : (0, r.jsx)("div", {
      className: l()(o.contentRating, a, i)
    })
  }