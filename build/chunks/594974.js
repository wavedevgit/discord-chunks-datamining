/** Chunk was on web.js **/
/** chunk id: 594974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Be: () => a,
  Y1: () => s
});
let r = "u" > typeof global ? global : self,
  i = r.MutationObserver || r.WebKitMutationObserver;

function a(e) {
  return function() {
    let t = setTimeout(r, 0),
      n = setInterval(r, 50);

    function r() {
      clearTimeout(t), clearInterval(n), e()
    }
  }
}

function o(e) {
  let t = 1,
    n = new i(e),
    r = document.createTextNode("");
  return n.observe(r, {
      characterData: true
    }),
    function() {
      r.data = t = -t
    }
}
let s = "function" == typeof i ? o : a