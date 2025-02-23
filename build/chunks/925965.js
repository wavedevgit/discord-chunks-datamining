/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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