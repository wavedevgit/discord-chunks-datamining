/** Chunk was on web.js **/
/** chunk id: 493623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk175922 = require("./175922.js");

function i(e) {
  var t = (0, r.Z)(e),
    n = e.offsetWidth,
    i = e.offsetHeight;
  return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - i) && (i = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: i
  }
}