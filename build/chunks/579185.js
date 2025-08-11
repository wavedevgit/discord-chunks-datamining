/** Chunk was on web.js **/
/** chunk id: 579185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk846519 = require("./846519.js");

function o(e, t) {
  let [n, o] = r.useState(false), a = r.useRef(new i.sW(t, () => o(false))), s = r.useRef(new i.sW(e, () => o(true))), l = r.useCallback(() => {
    a.current.cancel(), s.current.cancel()
  }, []);
  r.useEffect(() => l, [l]);
  let c = r.useCallback(() => {
    l(), a.current.delay()
  }, [l]);
  return {
    isHovered: n,
    setIsHovered: o,
    onMouseEnter: r.useCallback(() => {
      l(), s.current.delay()
    }, [l]),
    onMouseLeave: c,
    cancelTimers: l
  }
}