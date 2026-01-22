/** Chunk was on web.js **/
/** chunk id: 726402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk514467 = require("./514467.js");

function i(e) {
  var t = (0, r.A)(e),
    n = e.offsetWidth,
    i = e.offsetHeight;
  return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - i) && (i = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: i
  }
}