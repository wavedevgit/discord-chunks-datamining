/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
e.exports = function(e) {
  var t, r = this;
  "number" != typeof e.which && (e.which = e.keyCode);
  var i = n(619820)(e);
  if (i) {
    if ("keyup" === e.type && r.ignoreNextKeyup === i) {
      r.ignoreNextKeyup = !1;
      return
    }
    t = n(287901), r.handleKey(i, t(e), e)
  }
}