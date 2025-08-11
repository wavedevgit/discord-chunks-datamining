/** Chunk was on web.js **/
/** chunk id: 452463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a
});
var r, i = [],
  o = function() {
    return i.splice(0).forEach(function(e) {
      return e()
    })
  },
  a = function(e) {
    if (!r) {
      var t = 0,
        n = document.createTextNode(""),
        a = {
          characterData: true
        };
      new MutationObserver(function() {
        return o()
      }).observe(n, a), r = function() {
        n.textContent = "".concat(t ? t-- : t++)
      }
    }
    i.push(e), r()
  }