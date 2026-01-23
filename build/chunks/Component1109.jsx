/** Chunk was on 21738 **/
/** chunk id: 1109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk652215 = require("./652215.js"),
  Chunk252153 = require("./252153.js");
let o = "1",
  c = "2",
  u = "3",
  d = "4",
  p = "5",
  h = "6",
  g = "1",
  f = "2",
  m = "3",
  A = "4",
  _ = "5",
  b = {
    [Chunk652215.eMA.ESRB]: {
      [o]: Chunk252153._,
      [c]: Chunk252153.Zp,
      [u]: Chunk252153.N8,
      [d]: Chunk252153.L3,
      [p]: Chunk252153.Pu,
      [h]: Chunk252153.Jd
    },
    [Chunk652215.eMA.PEGI]: {
      [g]: Chunk252153.k8,
      [f]: Chunk252153.Do,
      [m]: Chunk252153.$w,
      [A]: Chunk252153.yx,
      [_]: Chunk252153.pr
    }
  },
  E = e => {
    let {
      agency: t,
      rating: n,
      className: i
    } = e, a = b[t][n];
    return null == a ? null : (0, r.jsx)("div", {
      className: l()(s.ZL, a, i)
    })
  }