/** Chunk was on 84018 **/
/** chunk id: 231679, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => r
});
var Chunk627968 = require("./627968.js");
let r = require("./64700.js").memo(function(e) {
  let {
    layout: t,
    layoutSize: n,
    className: r,
    renderWidget: s
  } = e;
  return null != t ? (0, i.jsx)("div", {
    className: r,
    style: {
      width: n.width,
      height: n.height
    },
    children: t.widgets.map(e => s(e, n))
  }) : null
})