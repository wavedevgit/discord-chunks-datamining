/** Chunk was on 945 **/
/** chunk id: 602683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js");
let l = function(e) {
  let {
    assetKey: t,
    initialValue: n,
    onMessageChange: l,
    title: s
  } = e, [o, c] = r.useState("");
  return r.useEffect(() => {
    c(null != n ? n : "")
  }, [n]), (0, a.jsx)(i.oil, {
    label: s,
    value: o,
    onChange: function(e) {
      c(e), l(t, e)
    }
  })
}