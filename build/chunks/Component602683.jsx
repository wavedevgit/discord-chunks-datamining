/** Chunk was on web.js **/
/** chunk id: 602683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");
let a = function(e) {
  let {
    assetKey: t,
    initialValue: n,
    onMessageChange: a,
    title: s
  } = e, [l, c] = i.useState("");

  function u(e) {
    c(e), a(t, e)
  }
  return i.useEffect(() => {
    c(null != n ? n : "")
  }, [n]), (0, r.jsxs)(o.xJW, {
    children: [(0, r.jsx)(o.vwX, {
      tag: o.RB0.H5,
      children: s
    }), (0, r.jsx)(o.R94, {
      children: (0, r.jsx)(o.oil, {
        value: l,
        onChange: u
      })
    })]
  })
}