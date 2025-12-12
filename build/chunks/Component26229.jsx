/** Chunk was on 63141 **/
/** chunk id: 26229, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => r
});
var Chunk54381 = require("./54381.js");
let r = require("./473749.js").memo(function(e) {
  let {
    layout: t,
    layoutSize: n,
    className: r,
    renderWidget: a
  } = e;
  return null != t ? (0, i.jsx)("div", {
    className: r,
    style: {
      width: n.width,
      height: n.height
    },
    children: t.widgets.map(e => a(e, n))
  }) : null
})