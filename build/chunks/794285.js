/** Chunk was on 23357 **/
"use strict";
var r = n(766362),
  o = n(294377),
  a = n(414629),
  i = n(197859),
  s = n(732116).CONSTRUCTOR,
  c = n(607672),
  l = o("Promise"),
  u = a && !s;
r({
  target: "Promise",
  stat: !0,
  forced: a || s
}, {
  resolve: function(e) {
    return c(u && this === l ? i : this, e)
  }
})