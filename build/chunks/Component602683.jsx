/** Chunk was on 10150 **/
/** chunk id: 602683, original params: e,t,n (module,exports,require) **/
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
    title: i
  } = e, [l, c] = s.useState("");
  return s.useEffect(() => {
    c(null != n ? n : "")
  }, [n]), (0, r.jsx)(o.oil, {
    label: i,
    value: l,
    onChange: function(e) {
      c(e), a(t, e)
    }
  })
}