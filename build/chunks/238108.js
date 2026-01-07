/** Chunk was on web.js **/
/** chunk id: 238108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let i = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5,
    [t, n] = r.useState(false),
    [i, a] = r.useState(0),
    [o, s] = r.useState(false),
    [l, c] = r.useState(0);
  return r.useEffect(() => {
    i >= e && (s(true), c(Math.floor(i / e)));
    let t = setTimeout(() => {
      a(0)
    }, 1e3);
    return () => clearTimeout(t)
  }, [i, e]), r.useEffect(() => {
    if (!t) {
      let e = setTimeout(() => {
        s(false), c(0)
      }, 1e3);
      return () => clearTimeout(e)
    }
    a(e => e + 1)
  }, [t]), {
    onHover: () => {
      n(true)
    },
    onUnhover: () => {
      n(false)
    },
    isEasterEggTriggered: o,
    easterEggLevel: l
  }
}