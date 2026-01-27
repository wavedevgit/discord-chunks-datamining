/** Chunk was on web.js **/
/** chunk id: 32058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk825057 = require("./825057.js"),
  Chunk997168 = require("./997168.js");
let u = e => {
  let {
    children: t,
    footer: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(c.zr, c.Gg, c.EX, c.vl, l.yl, i),
    "aria-label": s.intl.string(s.t.eQ2bLp),
    children: (0, r.jsxs)("form", {
      className: l.Zd,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, r.jsx)(o.$mQ, {
        "data-migration-pending": true,
        className: l.gT,
        children: t
      }), n]
    })
  })
}