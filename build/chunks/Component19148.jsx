/** Chunk was on web.js **/
/** chunk id: 19148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk172349 = require("./172349.js");

function s(e) {
  let {
    width: t,
    height: n,
    showPlaceholder: i,
    children: s,
    className: l
  } = e;
  return i ? (0, r.jsx)("div", {
    className: a()(o.placeholderElement, l),
    style: {
      width: t,
      height: n
    }
  }) : s
}