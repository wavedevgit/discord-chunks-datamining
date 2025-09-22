/** Chunk was on 10150 **/
/** chunk id: 602683, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");
let i = function(e) {
  let {
    assetKey: t,
    initialValue: s,
    onMessageChange: i,
    title: l
  } = e, [o, c] = r.useState("");
  return r.useEffect(() => {
    c(null != s ? s : "")
  }, [s]), (0, n.jsxs)(a.xJW, {
    children: [(0, n.jsx)(a.vwX, {
      children: l
    }), (0, n.jsx)(a.R94, {
      children: (0, n.jsx)(a.oil, {
        value: o,
        onChange: function(e) {
          c(e), i(t, e)
        }
      })
    })]
  })
}