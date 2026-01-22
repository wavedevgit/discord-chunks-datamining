/** Chunk was on 1784 **/
/** chunk id: 778992, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function l(e) {
  let {
    slideCount: t,
    intervalMs: n = 3e3
  } = e, [l, a] = (0, r.useState)(0), [i, s] = (0, r.useState)(false), c = (0, r.useCallback)(e => {
    i || e < 0 || e >= t || (s(true), setTimeout(() => {
      a(e), s(false)
    }, 300))
  }, [i, t, 300]);
  return (0, r.useEffect)(() => {
    if (t <= 1) return;
    let e = setInterval(() => {
      c((l + 1) % t)
    }, n);
    return () => clearInterval(e)
  }, [t, n, l, c]), {
    activeSlide: l,
    isTransitioning: i
  }
}