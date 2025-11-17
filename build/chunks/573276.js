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
  } = (0, Chunk593473.parse)(window.location.search);
  return Chunk473749.useEffect(() => {
    if (null != module && "" !== module) {
      let e = new URL("".concat(window.location.origin).concat(module)),
        t = new URLSearchParams(exports.search);
      require.set("handoff_token", "null"), exports.search = require.toString(), window.location.href = exports.toString()
    } else window.location.href = Chunk981631.Z5c.LOGIN
  }, [module]), null
}