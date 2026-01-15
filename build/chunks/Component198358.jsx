/** Chunk was on web.js **/
/** chunk id: 198358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk324060 = require("./324060.js"),
  Chunk883166 = require("./883166.jsx"),
  Chunk25239 = require("./25239.js");

function d(e) {
  let {
    children: t,
    noPadding: n = false,
    centered: a = true,
    verticalFlow: d = false,
    className: f
  } = e, p = i.useContext(l.Q), _ = (0, s.dQu)(p.primaryColor).hex(), h = (0, c.Sg)();
  return (0, r.jsx)(c.Qr.Provider, {
    value: h,
    children: (0, r.jsx)("div", {
      className: o()(u.container, {
        [u.containerPadding]: !n,
        [u.containerCentered]: a,
        [u.containerVertical]: d
      }, f),
      style: {
        color: _
      },
      children: t
    })
  })
}