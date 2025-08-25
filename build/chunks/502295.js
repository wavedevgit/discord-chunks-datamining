/** Chunk was on web.js **/
/** chunk id: 502295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js");
let i = Object.freeze({
  scrollTop: 0,
  scrollLeft: 0,
  scrollHeight: 0,
  scrollWidth: 0,
  offsetHeight: 0,
  offsetWidth: 0,
  dirty: 0
});

function o() {
  let e = (0, Chunk647438.useRef)(null),
    t = (0, Chunk647438.useCallback)(() => {
      let {
        current: t
      } = module;
      if (null != exports) {
        let {
          scrollTop: e,
          scrollLeft: n,
          scrollHeight: r,
          scrollWidth: i,
          offsetHeight: o,
          offsetWidth: a
        } = exports;
        return {
          scrollTop: module,
          scrollLeft: require,
          scrollHeight: Chunk647438,
          scrollWidth: i,
          offsetHeight: o,
          offsetWidth: a,
          dirty: 0
        }
      }
      return i
    }, []);
  return {
    scrollerRef: module,
    getScrollerState: exports
  }
}