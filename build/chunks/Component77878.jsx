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
  Chunk136569 = require("./136569.js");
let s = "1",
  c = "2",
  u = "3",
  d = "4",
  p = "5",
  f = "6",
  g = "1",
  h = "2",
  m = "3",
  b = "4",
  E = "5",
  _ = {
    [Chunk981631.aIt.ESRB]: {
      [s]: Chunk136569.esrbEveryone,
      [c]: Chunk136569.esrbEveryoneTenPlus,
      [u]: Chunk136569.esrbTeen,
      [d]: Chunk136569.esrbMature,
      [p]: Chunk136569.esrbAdult,
      [f]: Chunk136569.esrbRatingPending
    },
    [Chunk981631.aIt.PEGI]: {
      [g]: Chunk136569.pegiThree,
      [h]: Chunk136569.pegiSeven,
      [m]: Chunk136569.pegiTwelve,
      [b]: Chunk136569.pegiSixteen,
      [E]: Chunk136569.pegiEighteen
    }
  },
  O = e => {
    let {
      agency: t,
      rating: n,
      className: i
    } = e, a = _[t][n];
    return null == a ? null : (0, r.jsx)("div", {
      className: l()(o.contentRating, a, i)
    })
  }