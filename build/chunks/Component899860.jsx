/** Chunk was on 36054 **/
/** chunk id: 899860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");
let i = function(e) {
  let {
    assetKey: t,
    initialValue: n,
    onMessageChange: i,
    title: s
  } = e, [o, c] = l.useState("");
  return l.useEffect(() => {
    c(null != n ? n : "")
  }, [n]), (0, a.jsx)(r.ksK, {
    label: s,
    value: o,
    onChange: function(e) {
      c(e), i(t, e)
    }
  })
}