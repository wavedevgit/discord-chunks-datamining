/** Chunk was on 71747 **/
/** chunk id: 573276, original params: n,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => i
}), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk981631 = require("./981631.js");
let i = () => {
  let {
    redirect: n
  } = (0, a.parse)(window.location.search);
  return o.useEffect(() => {
    if (null != n && "" !== n) {
      let e = new URL("".concat(window.location.origin).concat(n)),
        t = new URLSearchParams(e.search);
      t.set("handoff_token", "null"), e.search = t.toString(), window.location.href = e.toString()
    } else window.location.href = c.Z5c.LOGIN
  }, [n]), null
}