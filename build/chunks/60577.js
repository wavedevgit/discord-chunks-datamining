/** Chunk was on 89522 **/
/** chunk id: 60577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i() {
  let [e, t] = (0, Chunk473749.useState)(window.innerWidth >= 1132);
  return (0, Chunk473749.useEffect)(() => {
    let e = () => {
      exports(window.innerWidth >= 1132)
    };
    return module(), window.addEventListener("resize", module), () => window.removeEventListener("resize", module)
  }, []), module
}