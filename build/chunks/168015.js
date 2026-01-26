/** Chunk was on 97887 **/
/** chunk id: 168015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function l() {
  let [e, t] = (0, r.useState)(window.innerWidth >= 1132);
  return (0, r.useEffect)(() => {
    let e = () => {
      t(window.innerWidth >= 1132)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), e
}