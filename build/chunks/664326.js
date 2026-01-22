/** Chunk was on 35511 **/
/** chunk id: 664326, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk870426 = require("./870426.js");

function a(e, t, n, a, o, i, s) {
  try {
    var l = e[i](s),
      c = l.value
  } catch (e) {
    return void n(e)
  }
  l.done ? t(c) : r.resolve(c).then(a, o)
}

function o(e) {
  return function() {
    var t = this,
      n = arguments;
    return new r(function(r, o) {
      var i = e.apply(t, n);

      function s(e) {
        a(i, r, o, s, l, "next", e)
      }

      function l(e) {
        a(i, r, o, s, l, "throw", e)
      }
      s(true)
    })
  }
}