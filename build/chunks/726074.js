/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  as: () => o,
  tX: () => s
});
let r = "undefined" != typeof global ? global : self,
  i = r.MutationObserver || r.WebKitMutationObserver;

function o(e) {
  return function() {
    let t = setTimeout(r, 0),
      n = setInterval(r, 50);

    function r() {
      clearTimeout(t), clearInterval(n), e()
    }
  }
}

function a(e) {
  let t = 1,
    n = new i(e),
    r = document.createTextNode("");
  return n.observe(r, {
      characterData: !0
    }),
    function() {
      t = -t, r.data = t
    }
}
let s = "function" == typeof i ? a : o