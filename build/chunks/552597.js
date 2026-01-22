/** Chunk was on web.js **/
/** chunk id: 552597, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk586348 = require("./586348.js");
module.exports = function(e) {
  var t = r(e),
    n = 0,
    i = 0,
    a = 0,
    s = 0;
  if (t.length) {
    if (t.length > 1 && 0 === t[0].width) {
      var o = t[1];
      n = o.top, i = o.right, a = o.bottom, s = o.left
    } else {
      var l = t[0];
      n = l.top, i = l.right, a = l.bottom, s = l.left
    }
    for (var c = 1; c < t.length; c++) {
      var u = t[c];
      0 !== u.height && 0 !== u.width && (n = Math.min(n, u.top), i = Math.max(i, u.right), a = Math.max(a, u.bottom), s = Math.min(s, u.left))
    }
  }
  return {
    top: n,
    right: i,
    bottom: a,
    left: s,
    width: i - s,
    height: a - n
  }
}