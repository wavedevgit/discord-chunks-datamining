/** Chunk was on 8087 **/
/** chunk id: 556971, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i(e) {
  let {
    slideCount: t,
    intervalMs: n = 3e3
  } = e, [i, a] = (0, r.useState)(0), [l, o] = (0, r.useState)(false), s = (0, r.useCallback)(e => {
    l || e < 0 || e >= t || (o(true), setTimeout(() => {
      a(e), o(false)
    }, 300))
  }, [l, t, 300]);
  return (0, r.useEffect)(() => {
    if (t <= 1) return;
    let e = setInterval(() => {
      s((i + 1) % t)
    }, n);
    return () => clearInterval(e)
  }, [t, n, i, s]), {
    activeSlide: i,
    isTransitioning: l
  }
}