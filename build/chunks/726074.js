/** Chunk was on web.js **/
/** chunk id: 726074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
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
      characterData: true
    }),
    function() {
      r.data = t = -t
    }
}
let s = "function" == typeof i ? a : o