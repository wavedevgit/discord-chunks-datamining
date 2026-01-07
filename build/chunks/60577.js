/** Chunk was on 41700 **/
/** chunk id: 60577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i() {
  let [e, t] = (0, r.useState)(window.innerWidth >= 1132);
  return (0, r.useEffect)(() => {
    let e = () => {
      t(window.innerWidth >= 1132)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), e
}