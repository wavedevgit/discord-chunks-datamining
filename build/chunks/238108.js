/** Chunk was on 75708 **/
/** chunk id: 238108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk73800 = require("./73800.js");
let r = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5,
    [t, n] = Chunk73800.useState(false),
    [r, s] = Chunk73800.useState(0),
    [a, l] = Chunk73800.useState(false),
    [o, c] = Chunk73800.useState(0);
  return Chunk73800.useEffect(() => {
    r >= module && (l(true), c(Math.floor(r / module)));
    let t = setTimeout(() => {
      s(0)
    }, 1e3);
    return () => clearTimeout(exports)
  }, [r, module]), Chunk73800.useEffect(() => {
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