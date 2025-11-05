/** Chunk was on 89311 **/
/** chunk id: 885006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function l() {
  arguments.length > 0 && true !== arguments[0] && arguments[0];
  let [e, t] = Chunk647438.useState(function() {
    var e, t;
    return arguments.length > 0 && true !== arguments[0] && arguments[0], {
      width: null != (e = window.innerWidth) ? module : 1080,
      height: null != (t = window.innerHeight) ? exports : 1080
    }
  }());
  return Chunk647438.useLayoutEffect(() => {
    function e() {
      exports({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    return module(), window.addEventListener("resize", module), () => window.removeEventListener("resize", module)
  }, []), module
}