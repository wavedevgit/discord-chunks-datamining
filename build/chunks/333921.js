/** Chunk was on 23357 **/
"use strict";
var r = n(766362),
  o = n(96403),
  a = n(505642),
  i = n(463374),
  s = n(342545),
  c = n(663158),
  l = o("".indexOf);
r({
  target: "String",
  proto: !0,
  forced: !c("includes")
}, {
  includes: function(e) {
    return !!~l(s(i(this)), s(a(e)), arguments.length > 1 ? arguments[1] : void 0)
  }
})