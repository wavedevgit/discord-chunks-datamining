/** Chunk was on web.js **/
/** chunk id: 452463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => o
});
var r, i = [],
  a = function() {
    return i.splice(0).forEach(function(e) {
      return e()
    })
  },
  o = function(e) {
    if (!r) {
      var t = 0,
        n = document.createTextNode(""),
        o = {
          characterData: true
        };
      new MutationObserver(function() {
        return a()
      }).observe(n, o), r = function() {
        n.textContent = "".concat(t ? t-- : t++)
      }
    }
    i.push(e), r()
  }