/** Chunk was on web.js **/
/** chunk id: 253010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");
let a = e => {
  var t, n;
  let {
    error: a
  } = e, o = a.getAnyErrorMessage(), s = null != (n = null != (t = a.code) ? t : a.status) ? n : "Unknown";
  return (0, r.jsx)(i.qXd, {
    color: i.DM8.DANGER,
    children: (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("strong", {
        children: ["Error ", s, ":"]
      }), " ", null != o ? o : "An unexpected error occurred"]
    })
  })
}