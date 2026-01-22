/** Chunk was on 74272 **/
/** chunk id: 569710, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => i
}), require("./747238.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk652215 = require("./652215.js");
let i = () => {
  let {
    redirect: e
  } = (0, a.parse)(window.location.search);
  return o.useEffect(() => {
    if (null != e && "" !== e) {
      let n = new URL("".concat(window.location.origin).concat(e)),
        t = new URLSearchParams(n.search);
      t.set("handoff_token", "null"), n.search = t.toString(), window.location.href = n.toString()
    } else window.location.href = c.BVt.LOGIN
  }, [e]), null
}