/** Chunk was on 89455 **/
/** chunk id: 61266, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk46054 = require("./46054.js"),
  Chunk465364 = require("./465364.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk647901 = require("./647901.jsx"),
  Chunk560438 = require("./560438.js"),
  Chunk483496 = require("./483496.js"),
  Chunk206314 = require("./206314.js");

function m(e) {
  let n, {
      content: t,
      className: o
    } = e,
    m = (n = (0, c.jc)(), (0, i.useMemo)(() => {
      let e;
      return null === n ? null : (e = null != n.message ? (0, s.ko)(n.message, _.l) : (0, s.Le)({
        channelId: n.channelId,
        renderOptions: _.l
      }), l.A.parse(t, true, e))
    }, [t, n])),
    f = (0, u.X)();
  return (0, r.jsx)("div", {
    className: a()(o, b.PT, d.T, f.className),
    children: m
  })
}