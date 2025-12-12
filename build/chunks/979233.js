/** Chunk was on 92504 **/
/** chunk id: 979233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk660384 = require("./660384.js");

function i() {
  let e = Chunk473749.useRef(new Chunk660384.Z),
    t = Chunk473749.useCallback(t => {
      e.current.handleScroll(t)
    }, []);
  return {
    resetScrollPosition: Chunk473749.useCallback(() => {
      module.current.scrollPosition.set(0)
    }, []),
    scrollPosition: module.current.scrollPosition,
    onScroll: exports
  }
}