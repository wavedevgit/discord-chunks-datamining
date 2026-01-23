/** Chunk was on web.js **/
/** chunk id: 846957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk132198 = require("./132198.jsx"),
  Chunk587301 = require("./587301.js");
let l = e => {
  let {
    product: t,
    animationState: n,
    className: i
  } = e, l = s.m[t.skuId];
  return null != l ? (0, r.jsx)("div", {
    className: a()(o.W, i),
    children: null != l.render && l.render({
      animationState: n,
      alt: t.name
    })
  }) : null
}