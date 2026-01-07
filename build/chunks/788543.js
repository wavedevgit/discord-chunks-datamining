/** Chunk was on web.js **/
/** chunk id: 788543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => i
});
var r = "ResizeObserver loop completed with undelivered notifications.",
  i = function() {
    var e;
    "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
      message: r
    }) : ((e = document.createEvent("Event")).initEvent("error", false, false), e.message = r), window.dispatchEvent(e)
  }