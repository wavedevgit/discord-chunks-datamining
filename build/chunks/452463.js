/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
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
          characterData: !0
        };
      new MutationObserver(function() {
        return o()
      }).observe(n, a), r = function() {
        n.textContent = "".concat(t ? t-- : t++)
      }
    }
    i.push(e), r()
  }