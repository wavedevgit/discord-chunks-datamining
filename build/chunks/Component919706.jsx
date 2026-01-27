/** Chunk was on web.js **/
/** chunk id: 919706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk235986 = require("./235986.jsx"),
  Chunk200749 = require("./200749.jsx"),
  Chunk49876 = require("./49876.js");

function s(e) {
  let {
    mainText: t,
    supportingText: n,
    errorCodeText: s,
    children: l,
    size: c
  } = e;
  return (0, r.jsxs)(i.A, {
    className: o.z,
    justify: i.A.Justify.CENTER,
    align: i.A.Align.CENTER,
    direction: i.A.Direction.VERTICAL,
    children: [(0, r.jsx)(a.A, {
      header: t,
      description: n,
      errorCodeMessage: s,
      size: c
    }), l]
  })
}