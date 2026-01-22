/** Chunk was on web.js **/
/** chunk id: 29570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let i = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5,
    [t, n] = r.useState(false),
    [i, a] = r.useState(0),
    [s, o] = r.useState(false),
    [l, c] = r.useState(0);
  return r.useEffect(() => {
    i >= e && (o(true), c(Math.floor(i / e)));
    let t = setTimeout(() => {
      a(0)
    }, 1e3);
    return () => clearTimeout(t)
  }, [i, e]), r.useEffect(() => {
    if (!t) {
      let e = setTimeout(() => {
        o(false), c(0)
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
    isEasterEggTriggered: s,
    easterEggLevel: l
  }
}