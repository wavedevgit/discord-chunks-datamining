/** Chunk was on 9885 **/
/** chunk id: 602683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  }, [n]), (0, r.jsxs)(o.xJW, {
    children: [(0, r.jsx)(o.vwX, {
      tag: o.RB0.H5,
      children: i
    }), (0, r.jsx)(o.R94, {
      children: (0, r.jsx)(o.oil, {
        value: l,
        onChange: function(e) {
          c(e), a(t, e)
        }
      })
    })]
  })
}