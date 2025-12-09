/** Chunk was on 73755 **/
/** chunk id: 579185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js");

function l(e, t) {
  let [n, l] = i.useState(false), a = i.useRef(new r.sW(t, () => l(false))), o = i.useRef(new r.sW(e, () => l(true))), s = i.useCallback(() => {
    a.current.cancel(), o.current.cancel()
  }, []);
  i.useEffect(() => s, [s]);
  let c = i.useCallback(() => {
    s(), a.current.delay()
  }, [s]);
  return {
    isHovered: n,
    setIsHovered: l,
    onMouseEnter: i.useCallback(() => {
      s(), o.current.delay()
    }, [s]),
    onMouseLeave: c,
    cancelTimers: s
  }
}