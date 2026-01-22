/** Chunk was on 22477 **/
/** chunk id: 899860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");
let r = function(e) {
  let {
    assetKey: t,
    initialValue: n,
    onMessageChange: r,
    title: s
  } = e, [o, c] = l.useState("");
  return l.useEffect(() => {
    c(null != n ? n : "")
  }, [n]), (0, a.jsx)(i.ksK, {
    label: s,
    value: o,
    onChange: function(e) {
      c(e), r(t, e)
    }
  })
}