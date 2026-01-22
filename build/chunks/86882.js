/** Chunk was on web.js **/
/** chunk id: 86882, original params: e,t,n (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  var t, r = this;
  "number" != typeof e.which && (e.which = e.keyCode);
  var i = n(780594)(e);
  if (i) {
    if ("keyup" === e.type && r.ignoreNextKeyup === i) {
      r.ignoreNextKeyup = false;
      return
    }
    t = n(767721), r.handleKey(i, t(e), e)
  }
}