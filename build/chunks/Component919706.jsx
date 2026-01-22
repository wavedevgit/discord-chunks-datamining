/** Chunk was on web.js **/
/** chunk id: 919706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk235986 = require("./235986.jsx"),
  Chunk200749 = require("./200749.jsx"),
  Chunk49876 = require("./49876.js");

function o(e) {
  let {
    mainText: t,
    supportingText: n,
    errorCodeText: o,
    children: l,
    size: c
  } = e;
  return (0, r.jsxs)(i.A, {
    className: s.z,
    justify: i.A.Justify.CENTER,
    align: i.A.Align.CENTER,
    direction: i.A.Direction.VERTICAL,
    children: [(0, r.jsx)(a.A, {
      header: t,
      description: n,
      errorCodeMessage: o,
      size: c
    }), l]
  })
}