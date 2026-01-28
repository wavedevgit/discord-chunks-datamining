/** Chunk was on 5606 **/
/** chunk id: 29570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let i = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5,
    [t, n] = r.useState(false),
    [i, l] = r.useState(0),
    [s, a] = r.useState(false),
    [o, c] = r.useState(0);
  return r.useEffect(() => {
    i >= e && (a(true), c(Math.floor(i / e)));
    let t = setTimeout(() => {
      l(0)
    }, 1e3);
    return () => clearTimeout(t)
  }, [i, e]), r.useEffect(() => {
    if (!t) {
      let e = setTimeout(() => {
        a(false), c(0)
      }, 1e3);
      return () => clearTimeout(e)
    }
    l(e => e + 1)
  }, [t]), {
    onHover: () => {
      n(true)
    },
    onUnhover: () => {
      n(false)
    },
    isEasterEggTriggered: s,
    easterEggLevel: o
  }
}