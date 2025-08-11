/** Chunk was on 23357 **/
/** chunk id: 460288, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk996696 = require("./996696.js");

function o(e, t, n, o, a, i, s) {
  try {
    var c = e[i](s),
      l = c.value
  } catch (e) {
    return void n(e)
  }
  c.done ? t(l) : r.resolve(l).then(o, a)
}

function a(e) {
  return function() {
    var t = this,
      n = arguments;
    return new r(function(r, a) {
      var i = e.apply(t, n);

      function s(e) {
        o(i, r, a, s, c, "next", e)
      }

      function c(e) {
        o(i, r, a, s, c, "throw", e)
      }
      s(true)
    })
  }
}