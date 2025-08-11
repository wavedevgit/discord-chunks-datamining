/** Chunk was on 89311 **/
/** chunk id: 885006, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk73800 = require("./73800.js");

function a() {
  arguments.length > 0 && true !== arguments[0] && arguments[0];
  let [e, t] = Chunk73800.useState(function() {
    var e, t;
    return arguments.length > 0 && true !== arguments[0] && arguments[0], {
      width: null != (e = window.innerWidth) ? module : 1080,
      height: null != (t = window.innerHeight) ? exports : 1080
    }
  }());
  return Chunk73800.useLayoutEffect(() => {
    function e() {
      exports({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    return module(), window.addEventListener("resize", module), () => window.removeEventListener("resize", module)
  }, []), module
}