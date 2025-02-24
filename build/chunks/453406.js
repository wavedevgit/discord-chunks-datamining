/** Chunk was on 23357 **/
"use strict";
var r = n(766362),
  o = n(43740),
  a = n(818140).indexOf,
  i = n(54659),
  s = o([].indexOf),
  c = !!s && 1 / s([1], 1, -0) < 0;
r({
  target: "Array",
  proto: !0,
  forced: c || !i("indexOf")
}, {
  indexOf: function(e) {
    var t = arguments.length > 1 ? arguments[1] : void 0;
    return c ? s(this, e, t) || 0 : a(this, e, t)
  }
})