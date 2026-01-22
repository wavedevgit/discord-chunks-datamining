/** Chunk was on web.js **/
/** chunk id: 61266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk46054 = require("./46054.js"),
  Chunk465364 = require("./465364.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk647901 = require("./647901.jsx"),
  Chunk560438 = require("./560438.js"),
  Chunk483496 = require("./483496.js"),
  Chunk206314 = require("./206314.js");

function _(e) {
  let t = (0, c.jc)();
  return (0, i.useMemo)(() => {
    let n;
    return null === t ? null : (n = null != t.message ? (0, l.ko)(t.message, d.l) : (0, l.Le)({
      channelId: t.channelId,
      renderOptions: d.l
    }), o.A.parse(e, true, n))
  }, [e, t])
}

function h(e) {
  let {
    content: t,
    className: n
  } = e, i = _(t), a = (0, u.X)();
  return (0, r.jsx)("div", {
    className: s()(n, p.PT, f.T, a.className),
    children: i
  })
}