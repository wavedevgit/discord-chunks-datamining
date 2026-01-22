/** Chunk was on web.js **/
/** chunk id: 484308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => s
});
var r, i = [],
  a = function() {
    return i.splice(0).forEach(function(e) {
      return e()
    })
  },
  s = function(e) {
    if (!r) {
      var t = 0,
        n = document.createTextNode(""),
        s = {
          characterData: true
        };
      new MutationObserver(function() {
        return a()
      }).observe(n, s), r = function() {
        n.textContent = "" + (t ? t-- : t++)
      }
    }
    i.push(e), r()
  }