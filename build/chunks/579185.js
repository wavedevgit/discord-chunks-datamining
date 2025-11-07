/** Chunk was on 13140 **/
/** chunk id: 579185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk846519 = require("./846519.js");

function l(e, t) {
  let [n, l] = r.useState(false), a = r.useRef(new i.sW(t, () => l(false))), o = r.useRef(new i.sW(e, () => l(true))), s = r.useCallback(() => {
    a.current.cancel(), o.current.cancel()
  }, []);
  r.useEffect(() => s, [s]);
  let c = r.useCallback(() => {
    s(), a.current.delay()
  }, [s]);
  return {
    isHovered: n,
    setIsHovered: l,
    onMouseEnter: r.useCallback(() => {
      s(), o.current.delay()
    }, [s]),
    onMouseLeave: c,
    cancelTimers: s
  }
}