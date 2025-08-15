/** Chunk was on web.js **/
/** chunk id: 502295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js");
let i = Object.freeze({
  scrollTop: 0,
  scrollLeft: 0,
  scrollHeight: 0,
  scrollWidth: 0,
  offsetHeight: 0,
  offsetWidth: 0,
  dirty: 0
});

function a() {
  let e = (0, Chunk73800.useRef)(null),
    t = (0, Chunk73800.useCallback)(() => {
      let {
        current: t
      } = module;
      if (null != exports) {
        let {
          scrollTop: e,
          scrollLeft: n,
          scrollHeight: r,
          scrollWidth: i,
          offsetHeight: a,
          offsetWidth: o
        } = exports;
        return {
          scrollTop: module,
          scrollLeft: require,
          scrollHeight: Chunk73800,
          scrollWidth: i,
          offsetHeight: a,
          offsetWidth: o,
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