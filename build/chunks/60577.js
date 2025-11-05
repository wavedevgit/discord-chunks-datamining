/** Chunk was on 14953 **/
/** chunk id: 60577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function i() {
  let [e, t] = (0, Chunk647438.useState)(window.innerWidth >= 1132);
  return (0, Chunk647438.useEffect)(() => {
    let e = () => {
      exports(window.innerWidth >= 1132)
    };
    return module(), window.addEventListener("resize", module), () => window.removeEventListener("resize", module)
  }, []), module
}