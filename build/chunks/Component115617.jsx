/** Chunk was on web.js **/
/** chunk id: 115617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk68713 = require("./68713.js");

function o(e) {
  let {
    node: t
  } = e;
  return (0, r.jsx)("div", {
    className: s.l,
    children: t.layout.map(e => (0, r.jsx)(a.A, {
      node: e
    }, e.key))
  })
}
let l = Chunk64700.memo(o)