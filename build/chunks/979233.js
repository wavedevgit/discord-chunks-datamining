/** Chunk was on 84283 **/
/** chunk id: 979233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => i
});
var Chunk647438 = require("./647438.js"),
  Chunk660384 = require("./660384.js");

function i() {
  let e = Chunk647438.useRef(new Chunk660384.Z),
    t = Chunk647438.useCallback(t => {
      e.current.handleScroll(t)
    }, []);
  return {
    resetScrollPosition: Chunk647438.useCallback(() => {
      module.current.scrollPosition.set(0)
    }, []),
    scrollPosition: module.current.scrollPosition,
    onScroll: exports
  }
}