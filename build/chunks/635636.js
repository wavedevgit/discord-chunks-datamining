/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  L: () => i
});
var r = "ResizeObserver loop completed with undelivered notifications.",
  i = function() {
    var e;
    "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
      message: r
    }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = r), window.dispatchEvent(e)
  }