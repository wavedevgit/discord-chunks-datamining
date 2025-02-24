/** Chunk was on 23357 **/
"use strict";
var r = n(766362),
  o = n(96403),
  a = Date,
  i = o(a.prototype.getTime);
r({
  target: "Date",
  stat: !0
}, {
  now: function() {
    return i(new a)
  }
})