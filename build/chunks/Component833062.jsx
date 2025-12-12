/** Chunk was on web.js **/
/** chunk id: 833062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk436083 = require("./436083.js");

function a(e) {
  let {
    application: t,
    useComma: n = false
  } = e;
  return (0, r.jsxs)("div", {
    className: o.applicationNameWrapper,
    children: [(0, r.jsx)(i.Z, {
      className: o.applicationIcon,
      game: t,
      size: i.A.XSMALL
    }), (0, r.jsx)("strong", {
      children: "".concat(t.name).concat(n ? ", " : "")
    })]
  })
}