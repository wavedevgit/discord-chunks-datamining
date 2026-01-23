/** Chunk was on 77313 **/
/** chunk id: 778992, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function l(e) {
  let {
    slideCount: t,
    intervalMs: n = 3e3
  } = e, [l, i] = (0, r.useState)(0), [a, s] = (0, r.useState)(false), o = (0, r.useCallback)(e => {
    a || e < 0 || e >= t || (s(true), setTimeout(() => {
      i(e), s(false)
    }, 300))
  }, [a, t, 300]);
  return (0, r.useEffect)(() => {
    if (t <= 1) return;
    let e = setInterval(() => {
      o((l + 1) % t)
    }, n);
    return () => clearInterval(e)
  }, [t, n, l, o]), {
    activeSlide: l,
    isTransitioning: a
  }
}