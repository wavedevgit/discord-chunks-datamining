/** Chunk was on web.js **/
/** chunk id: 369829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk49691 = require("./49691.js"),
  i = {
    passive: true
  };
let o = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {},
  effect: function(e) {
    var t = e.state,
      n = e.instance,
      o = e.options,
      a = o.scroll,
      s = true === a || a,
      l = o.resize,
      c = true === l || l,
      u = (0, r.Z)(t.elements.popper),
      d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(e) {
        e.addEventListener("scroll", n.update, i)
      }), c && u.addEventListener("resize", n.update, i),
      function() {
        s && d.forEach(function(e) {
          e.removeEventListener("scroll", n.update, i)
        }), c && u.removeEventListener("resize", n.update, i)
      }
  },
  data: {}
}