/** Chunk was on web.js **/
/** chunk id: 454028, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk254477 = require("./254477.js");

function s(e) {
  let {
    asset: t,
    size: n = "md",
    className: i
  } = e, s = a()(o.asset, {
    [o.assetPlaceholder]: null == t && false,
    [o["asset--".concat(n)]]: null != n
  }, i);
  return (0, r.jsx)("div", {
    className: s,
    children: null != t ? t : null
  })
}