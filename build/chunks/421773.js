/** Chunk was on 97492 **/
/** chunk id: 421773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js");

function i(e, t) {
  let [n, i] = r.useState(false), a = r.useRef(new l.J_(t, () => i(false))), s = r.useRef(new l.J_(e, () => i(true))), o = r.useCallback(() => {
    a.current.cancel(), s.current.cancel()
  }, []);
  r.useEffect(() => o, [o]);
  let c = r.useCallback(() => {
    o(), a.current.delay()
  }, [o]);
  return {
    isHovered: n,
    setIsHovered: i,
    onMouseEnter: r.useCallback(() => {
      o(), s.current.delay()
    }, [o]),
    onMouseLeave: c,
    cancelTimers: o
  }
}