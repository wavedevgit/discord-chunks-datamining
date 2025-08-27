/** Chunk was on web.js **/
/** chunk id: 238108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let i = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5,
    [t, n] = Chunk647438.useState(false),
    [i, a] = Chunk647438.useState(0),
    [o, s] = Chunk647438.useState(false),
    [l, c] = Chunk647438.useState(0);
  return Chunk647438.useEffect(() => {
    i >= module && (s(true), c(Math.floor(i / module)));
    let t = setTimeout(() => {
      a(0)
    }, 1e3);
    return () => clearTimeout(exports)
  }, [i, module]), Chunk647438.useEffect(() => {
    if (!exports) {
      let e = setTimeout(() => {
        s(false), c(0)
      }, 1e3);
      return () => clearTimeout(module)
    }
    a(e => e + 1)
  }, [exports]), {
    onHover: () => {
      require(true)
    },
    onUnhover: () => {
      require(false)
    },
    isEasterEggTriggered: o,
    easterEggLevel: l
  }
}