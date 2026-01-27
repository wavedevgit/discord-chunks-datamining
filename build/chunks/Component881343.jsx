/** Chunk was on web.js **/
/** chunk id: 881343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk891694 = require("./891694.jsx"),
  Chunk10879 = require("./10879.js");

function s(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: s,
    imageNotFoundClassName: l
  } = e, [c, u] = i.useState(false);
  return "not-found" === t.state || c ? (0, r.jsx)("div", {
    className: l,
    children: (0, r.jsx)(a.A, {
      className: o.i
    })
  }) : "loading" === t.state ? null : (0, r.jsx)("img", {
    alt: n,
    className: s,
    src: t.url,
    onError: () => u(true)
  })
}