/** Chunk was on web.js **/
/** chunk id: 573138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk854987 = require("./854987.js"),
  Chunk398225 = require("./398225.jsx"),
  Chunk256024 = require("./256024.js");

function d(e) {
  let {
    children: t,
    noPadding: n = false,
    centered: a = true,
    verticalFlow: d = false,
    className: f
  } = e, p = i.useContext(l.P), _ = (0, o.rdh)(p.primaryColor).hex(), h = (0, c.HL)();
  return (0, r.jsx)(c.gy.Provider, {
    value: h,
    children: (0, r.jsx)("div", {
      className: s()(u.kL, {
        [u.pK]: !n,
        [u.g7]: a,
        [u.W5]: d
      }, f),
      style: {
        color: _
      },
      children: t
    })
  })
}