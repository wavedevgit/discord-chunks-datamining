/** Chunk was on web.js **/
/** chunk id: 833062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk365606 = require("./365606.js");

function o(e) {
  let {
    application: t,
    useComma: n = false
  } = e;
  return (0, r.jsxs)("div", {
    className: a.applicationNameWrapper,
    children: [(0, r.jsx)(i.Z, {
      className: a.applicationIcon,
      game: t,
      size: i.A.XSMALL
    }), (0, r.jsx)("strong", {
      children: "".concat(t.name).concat(n ? ", " : "")
    })]
  })
}