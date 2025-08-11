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
  Chunk659195 = require("./659195.js");
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
      [s]: Chunk659195.esrbEveryone,
      [c]: Chunk659195.esrbEveryoneTenPlus,
      [u]: Chunk659195.esrbTeen,
      [d]: Chunk659195.esrbMature,
      [p]: Chunk659195.esrbAdult,
      [f]: Chunk659195.esrbRatingPending
    },
    [Chunk981631.aIt.PEGI]: {
      [h]: Chunk659195.pegiThree,
      [g]: Chunk659195.pegiSeven,
      [m]: Chunk659195.pegiTwelve,
      [b]: Chunk659195.pegiSixteen,
      [_]: Chunk659195.pegiEighteen
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