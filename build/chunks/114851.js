/** Chunk was on 88934 **/
/** chunk id: 114851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => i
});
var Chunk73800 = require("./73800.js"),
  Chunk660384 = require("./660384.js");

function i() {
  let e = Chunk73800.useRef(new Chunk660384.Z),
    t = Chunk73800.useCallback(t => {
      e.current.handleScroll(t)
    }, []);
  return {
    resetScrollPosition: Chunk73800.useCallback(() => {
      module.current.scrollPosition.set(0)
    }, []),
    scrollPosition: module.current.scrollPosition,
    onScroll: exports
  }
}