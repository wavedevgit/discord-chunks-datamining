/** Chunk was on 23357 **/
"use strict";
var r = n(766362),
  o = n(414629),
  a = n(732116).CONSTRUCTOR,
  i = n(197859),
  s = n(294377),
  c = n(735471),
  l = n(691244),
  u = i && i.prototype;
if (r({
    target: "Promise",
    proto: !0,
    forced: a,
    real: !0
  }, {
    catch: function(e) {
      return this.then(void 0, e)
    }
  }), !o && c(i)) {
  var d = s("Promise").prototype.catch;
  u.catch !== d && l(u, "catch", d, {
    unsafe: !0
  })
}