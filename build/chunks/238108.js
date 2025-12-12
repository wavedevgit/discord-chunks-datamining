/** Chunk was on web.js **/
/** chunk id: 238108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let i = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5,
    [t, n] = Chunk473749.useState(false),
    [i, o] = Chunk473749.useState(0),
    [a, s] = Chunk473749.useState(false),
    [l, c] = Chunk473749.useState(0);
  return Chunk473749.useEffect(() => {
    i >= module && (s(true), c(Math.floor(i / module)));
    let t = setTimeout(() => {
      o(0)
    }, 1e3);
    return () => clearTimeout(exports)
  }, [i, module]), Chunk473749.useEffect(() => {
    if (!exports) {
      let e = setTimeout(() => {
        s(false), c(0)
      }, 1e3);
      return () => clearTimeout(module)
    }
    o(e => e + 1)
  }, [exports]), {
    onHover: () => {
      require(true)
    },
    onUnhover: () => {
      require(false)
    },
    isEasterEggTriggered: a,
    easterEggLevel: l
  }
}