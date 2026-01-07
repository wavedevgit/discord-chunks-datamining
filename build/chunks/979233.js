/** Chunk was on 92504 **/
/** chunk id: 979233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk660384 = require("./660384.js");

function i() {
  let e = a.useRef(new r.Z),
    t = a.useCallback(t => {
      e.current.handleScroll(t)
    }, []);
  return {
    resetScrollPosition: a.useCallback(() => {
      e.current.scrollPosition.set(0)
    }, []),
    scrollPosition: e.current.scrollPosition,
    onScroll: t
  }
}