/** Chunk was on web.js **/
/** chunk id: 804570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk339453 = require("./339453.js");
let u = Chunk647438.memo(function(e) {
  let {
    emptyText: t,
    icon: n,
    absolute: i = false
  } = e;
  return (0, r.jsx)("div", {
    className: o()(c.emptyWidgetContainer, i && c.absolute),
    children: (0, r.jsx)(s.u, {
      text: t,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(n, {
          size: "md",
          color: l.TVs.colors.WHITE,
          className: c.emptyWidgetIcon
        })
      })
    })
  })
})