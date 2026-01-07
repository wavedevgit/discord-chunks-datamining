/** Chunk was on 89311 **/
/** chunk id: 885006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i() {
  arguments.length > 0 && true !== arguments[0] && arguments[0];
  let [e, t] = a.useState(function() {
    var e, t;
    return arguments.length > 0 && true !== arguments[0] && arguments[0], {
      width: null != (e = window.innerWidth) ? e : 1080,
      height: null != (t = window.innerHeight) ? t : 1080
    }
  }());
  return a.useLayoutEffect(() => {
    function e() {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), e
}