/** Chunk was on 30202 **/
/** chunk id: 238108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let r = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5,
    [t, n] = Chunk647438.useState(false),
    [r, s] = Chunk647438.useState(0),
    [a, l] = Chunk647438.useState(false),
    [o, c] = Chunk647438.useState(0);
  return Chunk647438.useEffect(() => {
    r >= module && (l(true), c(Math.floor(r / module)));
    let t = setTimeout(() => {
      s(0)
    }, 1e3);
    return () => clearTimeout(exports)
  }, [r, module]), Chunk647438.useEffect(() => {
    if (!exports) {
      let e = setTimeout(() => {
        l(false), c(0)
      }, 1e3);
      return () => clearTimeout(module)
    }
    s(e => e + 1)
  }, [exports]), {
    onHover: () => {
      require(true)
    },
    onUnhover: () => {
      require(false)
    },
    isEasterEggTriggered: a,
    easterEggLevel: o
  }
}