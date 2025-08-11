/** Chunk was on 37082 **/
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
  }, [n]), <o.xJW>{<o.vwX tag={o.RB0.H5}>{i}</o.vwX>}{<o.R94><o.oil value={l} onChange={function(e) {
          c(e), a(t, e)
        }} /></o.R94>}</o.xJW>
}