/** Chunk was on web.js **/
/** chunk id: 602683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");
let o = function(e) {
  let {
    assetKey: t,
    initialValue: n,
    onMessageChange: o,
    title: s
  } = e, [l, c] = i.useState("");

  function u(e) {
    c(e), o(t, e)
  }
  return i.useEffect(() => {
    c(null != n ? n : "")
  }, [n]), (0, r.jsxs)(a.xJW, {
    children: [(0, r.jsx)(a.vwX, {
      children: s
    }), (0, r.jsx)(a.R94, {
      children: (0, r.jsx)(a.oil, {
        value: l,
        onChange: u
      })
    })]
  })
}