/** Chunk was on web.js **/
/** chunk id: 502295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js");
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
  let e = (0, Chunk473749.useRef)(null),
    t = (0, Chunk473749.useCallback)(() => {
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
          scrollHeight: Chunk473749,
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