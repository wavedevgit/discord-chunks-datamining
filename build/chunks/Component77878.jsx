/** Chunk was on 1272 **/
/** chunk id: 77878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk981631 = require("./981631.js"),
  Chunk645905 = require("./645905.js");
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
      [o]: Chunk645905.esrbEveryone,
      [c]: Chunk645905.esrbEveryoneTenPlus,
      [u]: Chunk645905.esrbTeen,
      [d]: Chunk645905.esrbMature,
      [p]: Chunk645905.esrbAdult,
      [f]: Chunk645905.esrbRatingPending
    },
    [Chunk981631.aIt.PEGI]: {
      [h]: Chunk645905.pegiThree,
      [g]: Chunk645905.pegiSeven,
      [m]: Chunk645905.pegiTwelve,
      [_]: Chunk645905.pegiSixteen,
      [b]: Chunk645905.pegiEighteen
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