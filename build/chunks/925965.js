/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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