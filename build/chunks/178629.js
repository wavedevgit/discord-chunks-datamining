/** Chunk was on 28636 **/
/** chunk id: 178629, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => r
});
var Chunk64700 = require("./64700.js"),
  Chunk664336 = require("./664336.js");

function r() {
  let e = l.useRef(new a.A),
    t = l.useCallback(t => {
      e.current.handleScroll(t)
    }, []);
  return {
    resetScrollPosition: l.useCallback(() => {
      e.current.scrollPosition.set(0)
    }, []),
    scrollPosition: e.current.scrollPosition,
    onScroll: t
  }
}